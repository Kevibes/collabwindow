"use client";

import { OverlapSlot } from "@/lib/overlap";

interface OverlapBarProps {
  slots: OverlapSlot[];
  labelA: string;
  labelB: string;
}

export function OverlapBar({ slots, labelA, labelB }: OverlapBarProps) {
  const cellWidth = 100 / 24;

  return (
    <div className="w-full">
      {/* Zone A bar */}
      <div className="mb-1">
        <div className="text-xs font-medium text-muted-foreground mb-1">
          {labelA}
        </div>
        <div className="flex h-6 rounded-md overflow-hidden">
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
              style={{ flexBasis: `${cellWidth}%` }}
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
        <div className="flex h-6 rounded-md overflow-hidden">
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
              style={{ flexBasis: `${cellWidth}%` }}
              title={`${slot.labelB}: ${
                slot.inB ? slot.comfort : "outside hours"
              }`}
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
          <div className="w-3 h-3 rounded-sm bg-amber-400" />
          <span>Borderline</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-rose-400" />
          <span>Outside hours</span>
        </div>
      </div>
    </div>
  );
}
