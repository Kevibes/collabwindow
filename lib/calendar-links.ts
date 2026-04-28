import { fromZonedTime, formatInTimeZone } from "date-fns-tz";

export interface MeetingDetails {
  title: string;
  /** UTC date for the day — same shape as `date` in overlap-tool: Date.UTC(y, m-1, d) */
  dayUtc: Date;
  /** Local start hour in Zone A (integer 0–23) */
  startHourA: number;
  /** Local start minute in Zone A (0 or 30) */
  startMinuteA: number;
  /** Duration in minutes (e.g. 30, 60, 90, 120) */
  durationMinutes: number;
  timeZoneA: string;
  timeZoneB: string;
  cityA: string;
  cityB: string;
  /** Full CollabWindow URL with current query params */
  shareUrl: string;
}

export function toStartUtc(m: MeetingDetails): Date {
  const y  = m.dayUtc.getUTCFullYear();
  const mo = m.dayUtc.getUTCMonth() + 1; // getUTCMonth is 0-indexed; make it 1-indexed for the string
  const d  = m.dayUtc.getUTCDate();
  const hh = String(m.startHourA).padStart(2, "0");
  const mm = String(m.startMinuteA).padStart(2, "0");
  const mo2 = String(mo).padStart(2, "0");
  const dd  = String(d).padStart(2, "0");
  // Pass as a local-time string — fromZonedTime treats it as wall-clock time in timeZoneA
  return fromZonedTime(`${y}-${mo2}-${dd}T${hh}:${mm}:00`, m.timeZoneA);
}

export function toEndUtc(m: MeetingDetails): Date {
  return new Date(toStartUtc(m).getTime() + m.durationMinutes * 60_000);
}

function icsStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function description(m: MeetingDetails): string {
  const start = toStartUtc(m);
  const end   = toEndUtc(m);
  const fmtA  = (d: Date) => formatInTimeZone(d, m.timeZoneA, "h:mm a zzz");
  const fmtB  = (d: Date) => formatInTimeZone(d, m.timeZoneB, "h:mm a zzz");
  return (
    `${m.cityA}: ${fmtA(start)} – ${fmtA(end)}\n` +
    `${m.cityB}: ${fmtB(start)} – ${fmtB(end)}\n\n` +
    `Scheduled via CollabWindow: ${m.shareUrl}`
  );
}

export function googleCalendarUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text:    m.title,
    dates:  `${icsStamp(toStartUtc(m))}/${icsStamp(toEndUtc(m))}`,
    details: description(m),
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

export function outlookUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    subject:  m.title,
    startdt:  toStartUtc(m).toISOString(),
    enddt:    toEndUtc(m).toISOString(),
    body:     description(m),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${p}`;
}

export function teamsUrl(m: MeetingDetails): string {
  const p = new URLSearchParams({
    subject:   m.title,
    startTime: toStartUtc(m).toISOString(),
    endTime:   toEndUtc(m).toISOString(),
    content:   description(m),
  });
  return `https://teams.microsoft.com/l/meeting/new?${p}`;
}

export function icsContent(m: MeetingDetails): string {
  const uid  = `collabwindow-${Date.now()}@collabwindow.app`;
  const now  = icsStamp(new Date());
  const desc = description(m).replace(/\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CollabWindow//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${icsStamp(toStartUtc(m))}`,
    `DTEND:${icsStamp(toEndUtc(m))}`,
    `SUMMARY:${m.title}`,
    `DESCRIPTION:${desc}`,
    `URL:${m.shareUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function triggerIcsDownload(m: MeetingDetails): void {
  const blob = new Blob([icsContent(m)], { type: "text/calendar;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `${m.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function slackMessage(m: MeetingDetails): string {
  const start  = toStartUtc(m);
  const end    = toEndUtc(m);
  const fmtA   = (d: Date) => formatInTimeZone(d, m.timeZoneA, "h:mm a zzz");
  const fmtB   = (d: Date) => formatInTimeZone(d, m.timeZoneB, "h:mm a zzz");
  const dayStr = formatInTimeZone(start, m.timeZoneA, "EEEE, d MMM yyyy");
  return (
    `📅 *${m.title}*\n` +
    `🕐 ${dayStr}\n` +
    `${m.cityA}: ${fmtA(start)} – ${fmtA(end)}\n` +
    `${m.cityB}: ${fmtB(start)} – ${fmtB(end)}\n` +
    `🔗 ${m.shareUrl}`
  );
}
