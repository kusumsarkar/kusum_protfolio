"use client";

import Link from "next/link";
import { flights } from "@/lib/data";
import { useTerminalStore } from "@/lib/store";
import type { FlightCode } from "@/types";

export function TerminalMap() {
  const visited = useTerminalStore((s) => s.visited);
  const markVisited = useTerminalStore((s) => s.markVisited);

  return (
    <div
      className="w-full border border-hazel-dark/40 rounded-sm bg-[#1f1a12] terminal-texture p-5"
      aria-label="Terminal gate map"
    >
      <h2 className="font-display text-ivory tracking-[0.15em] text-xs md:text-sm uppercase mb-4">
        Terminal Map
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {flights.map((f) => {
          const done = visited.includes(f.code as FlightCode);
          return (
            <Link
              key={f.code}
              href={f.href}
              onClick={() => markVisited(f.code as FlightCode)}
              className={`focus-ring flex flex-col items-center justify-center gap-1 border rounded-sm px-3 py-4 text-center transition-colors ${
                done
                  ? "border-hazel-light/50 bg-hazel-dark/50"
                  : "border-hazel-dark/40 hover:bg-hazel-dark/30"
              }`}
            >
              <span className="font-mono text-ivory text-xs tracking-widest">
                Gate {f.gate}
              </span>
              <span className="font-display text-hazel-light text-[11px] uppercase tracking-wide">
                {f.short}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
