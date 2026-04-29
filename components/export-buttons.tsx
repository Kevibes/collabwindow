"use client";

import { useState, useMemo } from "react";
import { fromZonedTime, formatInTimeZone } from "date-fns-tz";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Download, ExternalLink } from "lucide-react";
import {
  type MeetingDetails,
  googleCalendarUrl,
  outlookUrl,
  teamsUrl,
  triggerIcsDownload,
  slackMessage,
} from "@/lib/calendar-links";
import type { OverlapWindow } from "@/lib/overlap";

interface ExportButtonsProps {
  overlapWindow: OverlapWindow;
  date: Date;
  timeZoneA: string;
  timeZoneB: string;
  cityA: string;
  cityB: string;
  meetingLengthMinutes: number;
  shareUrl: string;
}

interface Slot {
  key: string;
  hour: number;
  minute: number;
  labelA: string;
  labelB: string;
}

export function ExportButtons({
  overlapWindow,
  date,
  timeZoneA,
  timeZoneB,
  cityA,
  cityB,
  meetingLengthMinutes,
  shareUrl,
}: ExportButtonsProps) {
  const [title, setTitle] = useState("Team Meeting");
  const [slotKey, setSlotKey] = useState<string>("");
  const [slackCopied, setSlackCopied] = useState(false);

  const slots: Slot[] = useMemo(() => {
    const result: Slot[] = [];
    const y  = date.getUTCFullYear();
    const mo = date.getUTCMonth();
    const d  = date.getUTCDate();
    const maxStartHour = overlapWindow.endHour - meetingLengthMinutes / 60;

    for (let h = overlapWindow.startHour; h <= maxStartHour; h += 0.5) {
      const hour   = Math.floor(h);
      const minute = h % 1 >= 0.5 ? 30 : 0;

      const mo1 = mo + 1;
      const dateStr = `${y}-${String(mo1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const utc = fromZonedTime(
        `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`,
        timeZoneA
      );

      result.push({
        key:    `${hour}-${minute}`,
        hour,
        minute,
        labelA: formatInTimeZone(utc, timeZoneA, "h:mm a"),
        labelB: formatInTimeZone(utc, timeZoneB, "h:mm a"),
      });
    }
    return result;
  }, [overlapWindow, date, timeZoneA, timeZoneB, meetingLengthMinutes]);

  if (slots.length === 0) return null;

  const activeSlot = slots.find((s) => s.key === slotKey) ?? slots[0];

  const meeting: MeetingDetails = {
    title,
    dayUtc: date,
    startHourA:     activeSlot.hour,
    startMinuteA:   activeSlot.minute,
    durationMinutes: meetingLengthMinutes,
    timeZoneA,
    timeZoneB,
    cityA,
    cityB,
    shareUrl,
  };

  const copySlack = async () => {
    await navigator.clipboard.writeText(slackMessage(meeting));
    setSlackCopied(true);
    setTimeout(() => setSlackCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border bg-background p-6 space-y-5">
      <h3 className="text-base font-semibold">Schedule this meeting</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Meeting title</Label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>

        <div className="space-y-1.5">
          <Label>Start time ({cityA})</Label>
          <Select
            value={slotKey || slots[0].key}
            onValueChange={(v) => { if (v !== null) setSlotKey(v); }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {slots.map((s) => (
                <SelectItem key={s.key} value={s.key}>
                  {s.labelA}
                  <span className="text-muted-foreground ml-2">
                    / {s.labelB} {cityB}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Add to calendar
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(googleCalendarUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Google Calendar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(outlookUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Outlook
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => triggerIcsDownload(meeting)}
            className="gap-1.5"
          >
            <Download className="h-3.5 w-3.5" />
            Apple / .ics
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Open meeting app
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open(teamsUrl(meeting), "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Microsoft Teams
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => globalThis.open("https://zoom.us/meeting/schedule", "_blank")}
            className="gap-1.5"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Zoom
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Share with team
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={copySlack}
          className="gap-1.5"
        >
          <Copy className="h-3.5 w-3.5" />
          {slackCopied ? "Copied!" : "Copy for Slack"}
        </Button>
      </div>
    </div>
  );
}
