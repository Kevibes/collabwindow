"use client";

import { useMemo } from "react";
import { calculateOverlap } from "./overlap";

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
