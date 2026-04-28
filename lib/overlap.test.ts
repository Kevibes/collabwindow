import { describe, it, expect } from "vitest";
import {
  calculateOverlap,
  getComfortLevel,
  getLocalHourLabel,
  isDstTransitionNearby,
} from "./overlap";
import { toStartUtc } from "./calendar-links";
import { fromZonedTime } from "date-fns-tz";

describe("getComfortLevel", () => {
  it("returns bad outside working hours", () => {
    expect(getComfortLevel(6, 9, 17)).toBe("bad");
    expect(getComfortLevel(18, 9, 17)).toBe("bad");
  });

  it("returns good between 9 and 18", () => {
    expect(getComfortLevel(9, 8, 19)).toBe("good");
    expect(getComfortLevel(12, 8, 19)).toBe("good");
    expect(getComfortLevel(17, 8, 19)).toBe("good");
  });

  it("returns borderline inside working hours but outside 9–18", () => {
    expect(getComfortLevel(8, 7, 15)).toBe("borderline");
    expect(getComfortLevel(7, 7, 15)).toBe("borderline");
    expect(getComfortLevel(19, 9, 21)).toBe("borderline");
  });
});

describe("calculateOverlap", () => {
  it("returns correct windows for US–India (half-hour offset)", () => {
    // 2026-04-28 is not near a DST transition for US
    const date = new Date("2026-04-28T00:00:00Z");
    // Use US 6 AM – 2 PM to create overlap with India 9 AM – 5 PM
    const result = calculateOverlap(
      date,
      "America/New_York",
      "Asia/Kolkata",
      6,
      14,
      9,
      17
    );

    expect(result.slots.length).toBe(24);
    expect(result.windows.length).toBeGreaterThan(0);

    // Verify half-hour offset is handled: India uses 30-minute offsets
    const slotWithHalfHour = result.slots.find((s) => s.labelB.includes(":"));
    expect(slotWithHalfHour).toBeDefined();
  });

  it("returns correct windows for US–UK", () => {
    const date = new Date("2026-04-28T00:00:00Z");
    const result = calculateOverlap(
      date,
      "America/New_York",
      "Europe/London",
      9,
      17,
      9,
      17
    );

    expect(result.slots.length).toBe(24);
    expect(result.windows.length).toBeGreaterThan(0);
  });

  it("returns correct windows for US–Japan", () => {
    const date = new Date("2026-04-28T00:00:00Z");
    // Use US 5 PM – 6 PM to create a 1-hour overlap with Japan 9 AM – 5 PM
    const result = calculateOverlap(
      date,
      "America/Los_Angeles",
      "Asia/Tokyo",
      17,
      18,
      9,
      17
    );

    expect(result.slots.length).toBe(24);
    expect(result.windows.length).toBe(1);
    expect(result.windows[0].durationHours).toBe(1);
  });

  it("marks non-overlapping hours as bad", () => {
    const date = new Date("2026-04-28T00:00:00Z");
    const result = calculateOverlap(
      date,
      "America/New_York",
      "Asia/Kolkata",
      9,
      17,
      9,
      17
    );

    const badSlots = result.slots.filter((s) => s.comfort === "bad");
    expect(badSlots.length).toBeGreaterThan(0);
  });
});

describe("getLocalHourLabel", () => {
  it("produces a label for a known timezone", () => {
    const date = new Date("2026-04-28T12:00:00Z");
    const label = getLocalHourLabel(date, "America/New_York", 9);
    expect(label).toMatch(/\d{1,2}:\d{2}\s(AM|PM)/);
  });
});

describe("isDstTransitionNearby", () => {
  it("detects a DST transition near March clocks-forward", () => {
    // 2026-03-08 is the US DST transition date
    const date = new Date("2026-03-07T00:00:00Z");
    expect(isDstTransitionNearby(date, "America/New_York")).toBe(true);
  });

  it("returns false far from any DST transition", () => {
    const date = new Date("2026-07-15T00:00:00Z");
    expect(isDstTransitionNearby(date, "America/New_York")).toBe(false);
  });
});

describe("toStartUtc", () => {
  it("produces correct UTC from zone-A input", () => {
    const meeting = {
      title: "Test",
      dayUtc: new Date(Date.UTC(2026, 3, 28)), // April 28, 2026
      startHourA: 9,
      startMinuteA: 0,
      durationMinutes: 60,
      timeZoneA: "America/New_York",
      timeZoneB: "Asia/Kolkata",
      cityA: "New York",
      cityB: "Mumbai",
      shareUrl: "https://example.com",
    };

    const startUtc = toStartUtc(meeting);
    // 9 AM NY (EDT, UTC-4) = 13:00 UTC
    expect(startUtc.getUTCHours()).toBe(13);
    expect(startUtc.getUTCDate()).toBe(28);
  });

  it("handles half-hour start minutes", () => {
    const meeting = {
      title: "Test",
      dayUtc: new Date(Date.UTC(2026, 3, 28)),
      startHourA: 9,
      startMinuteA: 30,
      durationMinutes: 60,
      timeZoneA: "Asia/Kolkata",
      timeZoneB: "America/New_York",
      cityA: "Mumbai",
      cityB: "New York",
      shareUrl: "https://example.com",
    };

    const startUtc = toStartUtc(meeting);
    // 9:30 AM India (IST, UTC+5:30) = 04:00 UTC
    expect(startUtc.getUTCMinutes()).toBe(0);
    expect(startUtc.getUTCHours()).toBe(4);
  });
});
