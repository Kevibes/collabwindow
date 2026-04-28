"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export function AdSlot({ slot, format = "auto", className = "" }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not yet loaded
    }
  }, []);

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!publisherId) {
    return (
      <div
        className={`border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-xs text-slate-400 min-h-[90px] ${className}`}
      >
        Ad placeholder · slot {slot}
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      data-ad-client={publisherId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
