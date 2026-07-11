"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { flights } from "@/lib/data";
import { useTerminalStore } from "@/lib/store";
import type { FlightCode } from "@/types";

export function BoardingStubCollection({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const visited = useTerminalStore((s) => s.visited);
  const percent = useTerminalStore((s) => s.completionPercent());

  const isDark = variant === "dark";

  return (
    <div
      className={`w-full border rounded-sm px-4 py-3 ${
        isDark
          ? "border-hazel-dark/40 bg-[#1f1a12]"
          : "border-border bg-ivory"
      }`}
      aria-label="Trip progress"
    >
      <div className="flex items-center justify-between mb-2.5">
        <span
          className={`text-[10px] uppercase tracking-[0.2em] ${
            isDark ? "text-hazel-light/80" : "text-text-muted"
          }`}
        >
          Trip Progress
        </span>
        <span
          className={`font-mono text-xs ${
            isDark ? "text-ivory" : "text-hazel-dark"
          }`}
        >
          {percent}%
        </span>
      </div>

      <div
        className={`h-1 w-full rounded-full overflow-hidden mb-3 ${
          isDark ? "bg-hazel-dark/40" : "bg-border"
        }`}
      >
        <div
          className="h-full bg-hazel transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ul className="flex flex-wrap gap-2">
        {flights.map((f) => {
          const done = visited.includes(f.code as FlightCode);
          return (
            <li key={f.code}>
              <Link
                href={f.href}
                className={`focus-ring flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm text-[11px] font-mono tracking-wide border transition-colors ${
                  done
                    ? isDark
                      ? "border-hazel-light/50 text-ivory bg-hazel-dark/50"
                      : "border-hazel text-hazel-dark bg-beige"
                    : isDark
                    ? "border-hazel-dark/40 text-hazel-light/60"
                    : "border-border text-text-muted"
                }`}
              >
                {done ? (
                  <Check size={11} aria-hidden="true" />
                ) : (
                  <span className="w-[11px] inline-block" aria-hidden="true">
                    □
                  </span>
                )}
                {f.code}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
