"use client";

import { useEffect, useState } from "react";

export function AirportClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    const raf = requestAnimationFrame(() => setNow(new Date()));
    return () => {
      clearInterval(id);
      cancelAnimationFrame(raf);
    };
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-GB", { hour12: false })
    : "--:--:--";
  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className={`text-right ${className}`} aria-live="off">
      <div className="font-mono text-2xl md:text-3xl tracking-wider text-ivory tabular-nums">
        {time}
      </div>
      <div className="text-xs md:text-sm text-hazel-light mt-1">{date}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-hazel-light/70 mt-1">
        Local Terminal Time
      </div>
    </div>
  );
}
