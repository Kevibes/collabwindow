"use client";

import { useMemo } from "react";
import { fromZonedTime, formatInTimeZone } from "date-fns-tz";
import { format } from "date-fns";

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
  const iso = formatInTimeZone(date, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const offsetStr = iso.slice(-6);
  const sign = offsetStr[0] === "+" ? 1 : -1;
  const hours = parseInt(offsetStr.slice(1, 3), 10);
  const mins = parseInt(offsetStr.slice(4, 6), 10);
  return sign * (hours * 60 + mins);
}

export function getLocalHourLabel(
  date: Date,
  timeZone: string,
  hour: number
): string {
  const dateStr = format(date, "yyyy-MM-dd");
  const timeInZone = `${dateStr}T${hour.toString().padStart(2, "0")}:00:00`;
  const utcDate = fromZonedTime(timeInZone, timeZone);

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
  const dateStr = format(date, "yyyy-MM-dd");

  for (let hourA = 0; hourA < 24; hourA++) {
    const timeInA = `${dateStr}T${hourA.toString().padStart(2, "0")}:00:00`;
    const utcDate = fromZonedTime(timeInA, timeZoneA);

    const hourInB = parseInt(
      formatInTimeZone(utcDate, timeZoneB, "H"),
      10
    );

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
      labelA: formatHour(hourA),
      labelB: formatHour(hourInB),
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
        if (slot.comfort === "good" && currentWindow.comfort !== "good") {
          currentWindow.comfort = "good";
        } else if (
          slot.comfort === "borderline" &&
          currentWindow.comfort === "bad"
        ) {
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
    const endSlot = slots.find((s) => s.hour === win.endHour - 1);
    if (startSlot && endSlot) {
      win.displayA = `${startSlot.labelA} – ${endSlot.labelA}`;
      win.displayB = `${startSlot.labelB} – ${endSlot.labelB}`;
    }
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

export function useOverlap(
  date: Date,
  timeZoneA: string,
  timeZoneB: string,
  startWorkA: number,
  endWorkA: number,
  startWorkB: number,
  endWorkB: number
) {
  return useMemo(
    () =>
      calculateOverlap(
        date,
        timeZoneA,
        timeZoneB,
        startWorkA,
        endWorkA,
        startWorkB,
        endWorkB
      ),
    [date, timeZoneA, timeZoneB, startWorkA, endWorkA, startWorkB, endWorkB]
  );
}
