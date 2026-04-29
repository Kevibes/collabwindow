"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Copy,
  Share2,
  AlertTriangle,
} from "lucide-react";
import { formatInTimeZone } from "date-fns-tz";
import {
  timeZones,
  regions,
  getTimeZoneOption,
} from "@/lib/timezones";
import {
  isDstTransitionNearby,
  formatHour,
  calculateOverlap,
  getCurrentOffsetLabel,
} from "@/lib/overlap";
import { useOverlap } from "@/lib/use-overlap";
import { OverlapBar } from "./overlap-bar";
import { ExportButtons } from "./export-buttons";

interface OverlapToolProps {
  defaultA?: string;
  defaultB?: string;
  showContent?: boolean;
}

export function OverlapTool({ defaultA, defaultB, showContent = true }: OverlapToolProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read from URL params or defaults
  const [timeZoneA, setTimeZoneA] = useState(
    searchParams.get("a") || defaultA || "America/New_York"
  );
  const [timeZoneB, setTimeZoneB] = useState(
    searchParams.get("b") || defaultB || "Asia/Kolkata"
  );
  const [startWorkA, setStartWorkA] = useState(
    parseInt(searchParams.get("sa") || "9", 10)
  );
  const [endWorkA, setEndWorkA] = useState(
    parseInt(searchParams.get("ea") || "17", 10)
  );
  const [startWorkB, setStartWorkB] = useState(
    parseInt(searchParams.get("sb") || "9", 10)
  );
  const [endWorkB, setEndWorkB] = useState(
    parseInt(searchParams.get("eb") || "17", 10)
  );
  const [date, setDate] = useState(() => {
    const urlDate = searchParams.get("d");
    if (urlDate) {
      const [year, month, day] = urlDate.split("-").map(Number);
      return new Date(Date.UTC(year, month - 1, day));
    }
    // Default to "today" in timeZoneA's timezone
    const tzA = searchParams.get("a") || defaultA || "America/New_York";
    const todayInTz = formatInTimeZone(new Date(), tzA, "yyyy-MM-dd");
    const [year, month, day] = todayInTz.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  });
  const [meetingLength, setMeetingLength] = useState(
    parseInt(searchParams.get("len") || "60", 10)
  );
  const [copied, setCopied] = useState(false);

  // Update URL when state changes
  const updateUrl = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const handleChangeA = (val: string | null) => {
    if (!val) return;
    setTimeZoneA(val);
    updateUrl({ a: val });
  };
  const handleChangeB = (val: string | null) => {
    if (!val) return;
    setTimeZoneB(val);
    updateUrl({ b: val });
  };
  const handleDateChange = (val: string) => {
    const [year, month, day] = val.split("-").map(Number);
    const d = new Date(Date.UTC(year, month - 1, day));
    setDate(d);
    updateUrl({ d: val });
  };

  const { slots, windows } = useOverlap(
    date,
    timeZoneA,
    timeZoneB,
    startWorkA,
    endWorkA,
    startWorkB,
    endWorkB
  );

  const tzA = getTimeZoneOption(timeZoneA);
  const tzB = getTimeZoneOption(timeZoneB);

  const offsetA = useMemo(() => getCurrentOffsetLabel(date, timeZoneA), [date, timeZoneA]);
  const offsetB = useMemo(() => getCurrentOffsetLabel(date, timeZoneB), [date, timeZoneB]);

  const dstA = useMemo(() => isDstTransitionNearby(date, timeZoneA), [date, timeZoneA]);
  const dstB = useMemo(() => isDstTransitionNearby(date, timeZoneB), [date, timeZoneB]);

  // Filter windows by meeting length
  const viableWindows = useMemo(() => {
    return windows.filter((w) => w.durationHours * 60 >= meetingLength);
  }, [windows, meetingLength]);

  const bestWindow = viableWindows.find((w) => w.comfort === "good") || viableWindows[0];

  const dateStr = formatInTimeZone(date, timeZoneA, "yyyy-MM-dd");

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams();
    params.set("a", timeZoneA);
    params.set("b", timeZoneB);
    params.set("sa", String(startWorkA));
    params.set("ea", String(endWorkA));
    params.set("sb", String(startWorkB));
    params.set("eb", String(endWorkB));
    params.set("d", dateStr);
    params.set("len", String(meetingLength));
    return `${window.location.origin}${pathname}?${params.toString()}`;
  }, [timeZoneA, timeZoneB, startWorkA, endWorkA, startWorkB, endWorkB, dateStr, meetingLength, pathname]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Update URL on initial load if defaults differ from URL.
  // Intentionally runs once on mount to avoid overwriting user edits.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!searchParams.has("a") && defaultA) updateUrl({ a: defaultA });
    if (!searchParams.has("b") && defaultB) updateUrl({ b: defaultB });
  }, []);

  return (
    <div className="space-y-6">
      {/* DST Warnings */}
      {(dstA || dstB) && (
        <div className="flex items-start gap-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800 dark:text-amber-200">
            <p className="font-medium">DST change approaching</p>
            <p className="text-amber-700 dark:text-amber-300">
              {dstA && dstB
                ? "Both time zones are within 2 weeks of a Daylight Saving Time transition. Overlap windows may shift."
                : dstA
                ? `${tzA?.city || "Zone A"} is within 2 weeks of a DST transition.`
                : `${tzB?.city || "Zone B"} is within 2 weeks of a DST transition.`}
            </p>
          </div>
        </div>
      )}

      <Card className="border shadow-sm">
        <CardContent className="p-6 space-y-6">
          {/* Time Zone Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone A */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                {tzA?.flag} {tzA?.city || "Zone A"}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  {offsetA}
                </span>
              </Label>
              <Select value={timeZoneA} onValueChange={handleChangeA}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {regions.map((region) => (
                    <SelectGroup key={region}>
                      <SelectLabel>{region}</SelectLabel>
                      {timeZones
                        .filter((tz) => tz.region === region)
                        .map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.flag} {tz.city} — {tz.label}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Working hours</span>
                  <span className="font-medium">
                    {formatHour(startWorkA)} – {formatHour(endWorkA)}
                  </span>
                </div>
                <Slider
                  value={[startWorkA, endWorkA]}
                  onValueChange={(v) => {
                    const arr = Array.isArray(v) ? v : [v];
                    if (arr.length >= 2) {
                      setStartWorkA(arr[0]);
                      setEndWorkA(arr[1]);
                      updateUrl({ sa: String(arr[0]), ea: String(arr[1]) });
                    }
                  }}
                  min={0}
                  max={24}
                  step={1}
                />
              </div>
            </div>

            {/* Zone B */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">
                {tzB?.flag} {tzB?.city || "Zone B"}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  {offsetB}
                </span>
              </Label>
              <Select value={timeZoneB} onValueChange={handleChangeB}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {regions.map((region) => (
                    <SelectGroup key={region}>
                      <SelectLabel>{region}</SelectLabel>
                      {timeZones
                        .filter((tz) => tz.region === region)
                        .map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.flag} {tz.city} — {tz.label}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Working hours</span>
                  <span className="font-medium">
                    {formatHour(startWorkB)} – {formatHour(endWorkB)}
                  </span>
                </div>
                <Slider
                  value={[startWorkB, endWorkB]}
                  onValueChange={(v) => {
                    const arr = Array.isArray(v) ? v : [v];
                    if (arr.length >= 2) {
                      setStartWorkB(arr[0]);
                      setEndWorkB(arr[1]);
                      updateUrl({ sb: String(arr[0]), eb: String(arr[1]) });
                    }
                  }}
                  min={0}
                  max={24}
                  step={1}
                />
              </div>
            </div>
          </div>

          {/* Date and Meeting Length */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
            <div className="space-y-2">
              <Label>Date</Label>
              <input
                type="date"
                value={dateStr}
                onChange={(e) => handleDateChange(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label>Meeting length</Label>
              <Select
                value={String(meetingLength)}
                onValueChange={(v) => {
                  if (!v) return;
                  const len = parseInt(v, 10);
                  setMeetingLength(len);
                  updateUrl({ len: String(len) });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                  <SelectItem value="180">3 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Third timezone feature removed — not yet implemented */}
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="border shadow-sm">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Overlap Result</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="gap-1.5"
            >
              {copied ? (
                <>Copied!</>
              ) : (
                <>
                  <Share2 className="h-4 w-4" /> Copy link
                </>
              )}
            </Button>
          </div>

          {bestWindow ? (
            <div className="space-y-4">
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 p-4">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium mb-1">
                  Best overlap window
                </p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
                    {bestWindow.displayA}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    ({bestWindow.durationHours}h overlap)
                  </div>
                </div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-2">
                  That’s{" "}
                  <span className="font-semibold">{bestWindow.displayB}</span>{" "}
                  in {tzB?.city}.
                </p>
              </div>

              {viableWindows.length > 1 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Other viable windows
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {viableWindows
                      .filter((w) => w !== bestWindow)
                      .map((w, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger>
                            <span
                              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default ${
                                w.comfort === "good"
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200 border-transparent"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 border-transparent"
                              }`}
                            >
                              {w.displayA}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{w.displayB} in {tzB?.city}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 p-4">
              <p className="text-sm text-rose-700 dark:text-rose-300 font-medium">
                No overlap found
              </p>
              <p className="text-sm text-rose-600 dark:text-rose-400 mt-1">
                Try adjusting working hours or adding a weekend day.
              </p>
            </div>
          )}

          {/* Visual Bar */}
          <div className="pt-4 border-t">
            <OverlapBar
              slots={slots}
              labelA={`${tzA?.city} working hours`}
              labelB={`${tzB?.city} working hours`}
            />
          </div>
        </CardContent>
      </Card>

      {/* Export Buttons */}
      {bestWindow && (
        <ExportButtons
          overlapWindow={bestWindow}
          date={date}
          timeZoneA={timeZoneA}
          timeZoneB={timeZoneB}
          cityA={tzA?.city ?? "Zone A"}
          cityB={tzB?.city ?? "Zone B"}
          meetingLengthMinutes={meetingLength}
          shareUrl={shareUrl}
        />
      )}

      {/* Quick Reference Table */}
      {showContent && (
        <Card className="border shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Best times to meet this week
            </h3>
            <QuickReferenceTable
              timeZoneA={timeZoneA}
              timeZoneB={timeZoneB}
              startWorkA={startWorkA}
              endWorkA={endWorkA}
              startWorkB={startWorkB}
              endWorkB={endWorkB}
              meetingLength={meetingLength}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function QuickReferenceTable({
  timeZoneA,
  timeZoneB,
  startWorkA,
  endWorkA,
  startWorkB,
  endWorkB,
  meetingLength,
}: {
  timeZoneA: string;
  timeZoneB: string;
  startWorkA: number;
  endWorkA: number;
  startWorkB: number;
  endWorkB: number;
  meetingLength: number;
}) {
  const days = useMemo(() => {
    const todayInTz = formatInTimeZone(new Date(), timeZoneA, "yyyy-MM-dd");
    const [year, month, day] = todayInTz.split("-").map(Number);
    const today = new Date(Date.UTC(year, month - 1, day));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setUTCDate(d.getUTCDate() + i);
      return d;
    });
  }, [timeZoneA]);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const rows = useMemo(
    () =>
      days.map((day) => {
        const { windows } = calculateOverlap(
          day,
          timeZoneA,
          timeZoneB,
          startWorkA,
          endWorkA,
          startWorkB,
          endWorkB
        );
        const viable = windows.filter(
          (w) => w.durationHours * 60 >= meetingLength
        );
        const best =
          viable.find((w) => w.comfort === "good") || viable[0];
        return { day, best };
      }),
    [
      days,
      timeZoneA,
      timeZoneB,
      startWorkA,
      endWorkA,
      startWorkB,
      endWorkB,
      meetingLength,
    ]
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">
              Day
            </th>
            <th className="text-left py-2 pr-4 font-medium text-muted-foreground">
              Best overlap
            </th>
            <th className="text-left py-2 font-medium text-muted-foreground">
              Comfort
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ day, best }, i) => (
            <tr key={i} className="border-b last:border-b-0">
              <td className="py-3 pr-4">
                <span className="font-medium">{dayNames[day.getDay()]}</span>
                <span className="text-muted-foreground ml-2">
                  {formatInTimeZone(day, timeZoneA, "MMM d")}
                </span>
              </td>
              <td className="py-3 pr-4">
                {best ? (
                  <span>{best.displayA}</span>
                ) : (
                  <span className="text-muted-foreground">No overlap</span>
                )}
              </td>
              <td className="py-3">
                {best ? (
                  <Badge
                    variant="outline"
                    className={
                      best.comfort === "good"
                        ? "border-emerald-500 text-emerald-700 dark:text-emerald-300"
                        : best.comfort === "borderline"
                        ? "border-amber-500 text-amber-700 dark:text-amber-300"
                        : "border-rose-500 text-rose-700 dark:text-rose-300"
                    }
                  >
                    {best.comfort === "good"
                      ? "Great"
                      : best.comfort === "borderline"
                      ? "OK"
                      : "Tight"}
                  </Badge>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
