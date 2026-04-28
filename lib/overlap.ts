import { fromZonedTime, formatInTimeZone } from "date-fns-tz";

export interface OverlapSlot {
  hour: number;
  inA: boolean;
  inB: boolean;
  comfort: "good" | "borderline" | "bad";
  labelA: string;
  labelB: string;
}

export interface OverlapWindow {
  startHour: number;
  endHour: number;
  durationHours: number;
  comfort: "good" | "borderline" | "bad";
  displayA: string;
  displayB: string;
}

export function formatHour(hour: number): string {
  const h = hour % 24;
  const ampm = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 === 0 ? 12 : h % 12;
  return `${displayH} ${ampm}`;
}

export function formatHour24(hour: number): string {
  const h = hour % 24;
  return `${h.toString().padStart(2, "0")}:00`;
}

function getOffsetMinutes(date: Date, timeZone: string): number {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "longOffset",
  });
  const parts = formatter.formatToParts(date);
  const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value || "";
  const match = offsetPart.match(/(?:GMT|UTC)?([+-]\d{1,2}):(\d{2})/);
  if (!match) return 0;
  const sign = match[1][0] === "+" ? 1 : -1;
  const hours = parseInt(match[1].slice(1), 10);
  const mins = parseInt(match[2], 10);
  return sign * (hours * 60 + mins);
}

export function getLocalHourLabel(
  date: Date,
  timeZone: string,
  hour: number
): string {
  const dateStr = formatInTimeZone(date, timeZone, "yyyy-MM-dd");
  const hh = String(hour).padStart(2, "0");
  const utcDate = fromZonedTime(`${dateStr}T${hh}:00:00`, timeZone);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(utcDate);
}

export function getComfortLevel(
  hourInZone: number,
  startWork: number,
  endWork: number
): "good" | "borderline" | "bad" {
  if (hourInZone < startWork || hourInZone >= endWork) return "bad";

  // These thresholds represent *comfortable* overlap hours (9 AM – 6 PM),
  // independent of the user's explicit working-hour boundaries.
  // A user may set 7 AM – 3 PM, but 7–9 AM is still considered borderline
  // because most people prefer meetings after 9 AM.
  const earlyThreshold = 9;
  const lateThreshold = 18;

  if (hourInZone >= earlyThreshold && hourInZone < lateThreshold) {
    return "good";
  }
  return "borderline";
}

export function calculateOverlap(
  date: Date,
  timeZoneA: string,
  timeZoneB: string,
  startWorkA: number,
  endWorkA: number,
  startWorkB: number,
  endWorkB: number
): { slots: OverlapSlot[]; windows: OverlapWindow[] } {
  const slots: OverlapSlot[] = [];
  const dateStr = formatInTimeZone(date, timeZoneA, "yyyy-MM-dd");
  const [year, month, day] = dateStr.split("-").map(Number);

  for (let hourA = 0; hourA < 24; hourA++) {
    const hhA = String(hourA).padStart(2, "0");
    const utcDate = fromZonedTime(`${dateStr}T${hhA}:00:00`, timeZoneA);

    const hourMinuteB = formatInTimeZone(utcDate, timeZoneB, "H:mm");
    const [hourB, minuteB] = hourMinuteB.split(":").map(Number);
    const hourInB = hourB + minuteB / 60;

    const inA = hourA >= startWorkA && hourA < endWorkA;
    const inB = hourInB >= startWorkB && hourInB < endWorkB;

    let comfort: OverlapSlot["comfort"] = "bad";
    if (inA && inB) {
      const comfortA = getComfortLevel(hourA, startWorkA, endWorkA);
      const comfortB = getComfortLevel(hourInB, startWorkB, endWorkB);
      if (comfortA === "good" && comfortB === "good") {
        comfort = "good";
      } else {
        comfort = "borderline";
      }
    }

    slots.push({
      hour: hourA,
      inA,
      inB,
      comfort,
      labelA: formatInTimeZone(utcDate, timeZoneA, "h:mm a"),
      labelB: formatInTimeZone(utcDate, timeZoneB, "h:mm a"),
    });
  }

  const windows: OverlapWindow[] = [];
  let currentWindow: OverlapWindow | null = null;

  for (const slot of slots) {
    if (slot.inA && slot.inB) {
      if (!currentWindow) {
        currentWindow = {
          startHour: slot.hour,
          endHour: slot.hour + 1,
          durationHours: 1,
          comfort: slot.comfort,
          displayA: `${slot.labelA}`,
          displayB: `${slot.labelB}`,
        };
      } else {
        currentWindow.endHour = slot.hour + 1;
        currentWindow.durationHours++;
        // Window comfort = worst comfort of any slot in the window
        if (slot.comfort === "borderline" && currentWindow.comfort === "good") {
          currentWindow.comfort = "borderline";
        }
      }
    } else {
      if (currentWindow) {
        windows.push(currentWindow);
        currentWindow = null;
      }
    }
  }
  if (currentWindow) {
    windows.push(currentWindow);
  }

  for (const win of windows) {
    const startSlot = slots.find((s) => s.hour === win.startHour);
    if (!startSlot) continue;

    const isNextDay = win.endHour >= 24;
    const actualEndHour = win.endHour % 24;
    const endDay = day + (isNextDay ? 1 : 0);

    const startUtcDate = fromZonedTime(
      `${dateStr}T${String(win.startHour).padStart(2, "0")}:00:00`,
      timeZoneA
    );
    const startLabelA = formatInTimeZone(startUtcDate, timeZoneA, "h:mm a");
    const startLabelB = formatInTimeZone(startUtcDate, timeZoneB, "h:mm a");

    const endDateObj = new Date(Date.UTC(year, month - 1, day + (isNextDay ? 1 : 0)));
    const endDateStr = `${endDateObj.getUTCFullYear()}-${String(endDateObj.getUTCMonth() + 1).padStart(2, "0")}-${String(endDateObj.getUTCDate()).padStart(2, "0")}`;
    const endUtcDate = fromZonedTime(
      `${endDateStr}T${String(actualEndHour).padStart(2, "0")}:00:00`,
      timeZoneA
    );
    const endLabelA = formatInTimeZone(endUtcDate, timeZoneA, "h:mm a");
    const endLabelB = formatInTimeZone(endUtcDate, timeZoneB, "h:mm a");

    win.displayA = `${startLabelA} – ${endLabelA}`;
    win.displayB = `${startLabelB} – ${endLabelB}`;
  }

  return { slots, windows };
}

export function isDstTransitionNearby(date: Date, timeZone: string): boolean {
  const checkDate = new Date(date);
  for (let offset = -14; offset <= 14; offset++) {
    const d = new Date(checkDate);
    d.setDate(d.getDate() + offset);
    const before = new Date(d.getTime() - 86400000);
    const after = new Date(d.getTime() + 86400000);

    const offsetBefore = getOffsetMinutes(before, timeZone);
    const offsetAfter = getOffsetMinutes(after, timeZone);

    if (offsetBefore !== offsetAfter) {
      return true;
    }
  }
  return false;
}

export function getCurrentOffsetLabel(date: Date, timeZone: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  });
  const parts = formatter.formatToParts(date);
  const offsetPart = parts.find((p) => p.type === "timeZoneName");
  return offsetPart?.value || "";
}

