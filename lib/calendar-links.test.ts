import { describe, it, expect } from "vitest";
import {
  googleCalendarUrl,
  outlookUrl,
  teamsUrl,
  icsContent,
  slackMessage,
  toStartUtc,
} from "./calendar-links";

function makeMeeting(): Parameters<typeof toStartUtc>[0] {
  return {
    title: "Team Standup",
    dayUtc: new Date(Date.UTC(2026, 3, 28)), // April 28, 2026
    startHourA: 9,
    startMinuteA: 0,
    durationMinutes: 60,
    timeZoneA: "America/New_York",
    timeZoneB: "Asia/Kolkata",
    cityA: "New York",
    cityB: "Mumbai",
    shareUrl: "https://www.collabwindow.app/?a=America%2FNew_York&b=Asia%2FKolkata",
  };
}

describe("googleCalendarUrl", () => {
  it("contains correct start and end timestamps", () => {
    const m = makeMeeting();
    const url = googleCalendarUrl(m);
    expect(url).toContain("calendar.google.com");
    expect(url).toContain("action=TEMPLATE");
    expect(url).toContain(m.title.replace(/\s/g, "+"));
  });
});

describe("outlookUrl", () => {
  it("contains subject and body", () => {
    const m = makeMeeting();
    const url = outlookUrl(m);
    expect(url).toContain("outlook.live.com");
    expect(url).toContain(m.title.replace(/\s/g, "+"));
  });
});

describe("teamsUrl", () => {
  it("contains subject and content", () => {
    const m = makeMeeting();
    const url = teamsUrl(m);
    expect(url).toContain("teams.microsoft.com");
    expect(url).toContain(m.title.replace(/\s/g, "+"));
  });
});

describe("icsContent", () => {
  it("starts with BEGIN:VCALENDAR", () => {
    const m = makeMeeting();
    const ics = icsContent(m);
    expect(ics.startsWith("BEGIN:VCALENDAR")).toBe(true);
  });

  it("contains a VEVENT block", () => {
    const m = makeMeeting();
    const ics = icsContent(m);
    expect(ics).toContain("BEGIN:VEVENT");
    expect(ics).toContain("END:VEVENT");
  });

  it("contains DTSTART and DTEND", () => {
    const m = makeMeeting();
    const ics = icsContent(m);
    expect(ics).toContain("DTSTART:");
    expect(ics).toContain("DTEND:");
  });

  it("contains the meeting title", () => {
    const m = makeMeeting();
    const ics = icsContent(m);
    expect(ics).toContain(`SUMMARY:${m.title}`);
  });
});

describe("slackMessage", () => {
  it("includes title, cities, times, and link", () => {
    const m = makeMeeting();
    const msg = slackMessage(m);
    expect(msg).toContain(m.title);
    expect(msg).toContain(m.cityA);
    expect(msg).toContain(m.cityB);
    expect(msg).toContain(m.shareUrl);
  });
});

describe("toStartUtc", () => {
  it("produces correct UTC for a US Eastern meeting", () => {
    const m = makeMeeting();
    const start = toStartUtc(m);
    // 9 AM EDT (UTC-4) = 13:00 UTC
    expect(start.getUTCHours()).toBe(13);
    expect(start.getUTCDate()).toBe(28);
    expect(start.getUTCMonth()).toBe(3); // April
  });

  it("produces correct UTC for a half-hour timezone", () => {
    const m = {
      ...makeMeeting(),
      timeZoneA: "Asia/Kolkata",
      startHourA: 9,
      startMinuteA: 30,
    };
    const start = toStartUtc(m);
    // 9:30 AM IST (UTC+5:30) = 04:00 UTC
    expect(start.getUTCHours()).toBe(4);
    expect(start.getUTCMinutes()).toBe(0);
  });
});
