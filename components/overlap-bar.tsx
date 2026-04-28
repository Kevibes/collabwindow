"use client";

import { OverlapSlot } from "@/lib/overlap";

interface OverlapBarProps {
  slots: OverlapSlot[];
  labelA: string;
  labelB: string;
}

function getBarSummary(slots: OverlapSlot[], label: string, key: "inA" | "inB"): string {
  const segments: string[] = [];
  let currentStart: number | null = null;
  let currentComfort: string | null = null;

  for (const slot of slots) {
    if (slot[key]) {
      if (currentStart === null) {
        currentStart = slot.hour;
        currentComfort = slot.comfort;
      } else if (slot.comfort !== currentComfort) {
        segments.push(`${currentComfort} overlap from ${formatHour(currentStart)} to ${formatHour(slot.hour)}`);
        currentStart = slot.hour;
        currentComfort = slot.comfort;
      }
    } else {
      if (currentStart !== null) {
        segments.push(`${currentComfort} overlap from ${formatHour(currentStart)} to ${formatHour(slot.hour)}`);
        currentStart = null;
        currentComfort = null;
      }
    }
  }
  if (currentStart !== null) {
    segments.push(`${currentComfort} overlap from ${formatHour(currentStart)} to ${formatHour(24)}`);
  }

  return segments.length
    ? `${label}: ${segments.join("; ")}.`
    : `${label}: no overlap.`;
}

function formatHour(hour: number): string {
  const h = hour % 24;
  const ampm = h >= 12 ? "PM" : "AM";
  const displayH = h % 12 === 0 ? 12 : h % 12;
  return `${displayH} ${ampm}`;
}

function cellStyle(comfort: "good" | "borderline" | "bad"): React.CSSProperties {
  if (comfort === "borderline") {
    return {
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)",
    };
  }
  if (comfort === "bad") {
    return {
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08) 2px, transparent 2px, transparent 4px)",
    };
  }
  return {};
}

export function OverlapBar({ slots, labelA, labelB }: OverlapBarProps) {
  const cellWidth = 100 / 24;
  const summaryA = getBarSummary(slots, labelA, "inA");
  const summaryB = getBarSummary(slots, labelB, "inB");

  return (
    <div className="w-full">
      <div className="sr-only" role="status" aria-live="polite">
        {summaryA} {summaryB}
      </div>

      {/* Zone A bar */}
      <div className="mb-1">
        <div className="text-xs font-medium text-muted-foreground mb-1">
          {labelA}
        </div>
        <div
          className="flex h-6 rounded-md overflow-hidden"
          role="img"
          aria-label={summaryA}
        >
          {slots.map((slot) => (
            <div
              key={`a-${slot.hour}`}
              className={`flex-1 border-r border-background last:border-r-0 ${
                slot.inA
                  ? slot.comfort === "good"
                    ? "bg-emerald-500"
                    : slot.comfort === "borderline"
                    ? "bg-amber-400"
                    : "bg-rose-400"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
              style={{ flexBasis: `${cellWidth}%`, ...(slot.inA ? cellStyle(slot.comfort) : {}) }}
              aria-hidden="true"
              title={`${slot.labelA}: ${
                slot.inA ? slot.comfort : "outside hours"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hour labels + ticks */}
      <div className="relative mb-1">
        <div className="flex">
          {slots.map((slot) =>
            slot.hour % 3 === 0 ? (
              <div
                key={`label-${slot.hour}`}
                className="text-[10px] text-muted-foreground"
                style={{ flexBasis: `${cellWidth * 3}%`, paddingLeft: 2 }}
              >
                {slot.labelA}
              </div>
            ) : null
          )}
        </div>
        {/* Tick marks aligned to hour boundaries */}
        <div className="flex h-1 mt-0.5">
          {slots.map((slot) => (
            <div
              key={`tick-${slot.hour}`}
              className={`border-r ${slot.hour % 3 === 0 ? 'border-muted-foreground/40' : 'border-transparent'}`}
              style={{ flexBasis: `${cellWidth}%` }}
            />
          ))}
        </div>
      </div>

      {/* Zone B bar */}
      <div className="mb-1">
        <div className="text-xs font-medium text-muted-foreground mb-1">
          {labelB}
        </div>
        <div
          className="flex h-6 rounded-md overflow-hidden"
          role="img"
          aria-label={summaryB}
        >
          {slots.map((slot) => (
            <div
              key={`b-${slot.hour}`}
              className={`flex-1 border-r border-background last:border-r-0 ${
                slot.inB
                  ? slot.comfort === "good"
                    ? "bg-emerald-500"
                    : slot.comfort === "borderline"
                    ? "bg-amber-400"
                    : "bg-rose-400"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
              style={{ flexBasis: `${cellWidth}%`, ...(slot.inB ? cellStyle(slot.comfort) : {}) }}
              aria-hidden="true"
              title={`${slot.labelB}: ${
                slot.inB ? slot.comfort : "outside hours"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Zone B hour labels + ticks */}
      <div className="relative mb-1">
        <div className="flex">
          {slots.map((slot) =>
            slot.hour % 3 === 0 ? (
              <div
                key={`label-b-${slot.hour}`}
                className="text-[10px] text-muted-foreground"
                style={{ flexBasis: `${cellWidth * 3}%`, paddingLeft: 2 }}
              >
                {slot.labelB}
              </div>
            ) : null
          )}
        </div>
        {/* Tick marks aligned to hour boundaries */}
        <div className="flex h-1 mt-0.5">
          {slots.map((slot) => (
            <div
              key={`tick-b-${slot.hour}`}
              className={`border-r ${slot.hour % 3 === 0 ? 'border-muted-foreground/40' : 'border-transparent'}`}
              style={{ flexBasis: `${cellWidth}%` }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-emerald-500" />
          <span>Great overlap</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-amber-400" style={cellStyle("borderline")} />
          <span>Borderline</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-rose-400" style={cellStyle("bad")} />
          <span>Outside hours</span>
        </div>
      </div>
    </div>
  );
}
