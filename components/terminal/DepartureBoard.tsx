"use client";

import { motion } from "framer-motion";
import { flights } from "@/lib/data";
import { SplitFlapRow } from "./SplitFlapRow";
import { useTerminalStore } from "@/lib/store";
import type { FlightCode } from "@/types";

export function DepartureBoard() {
  const openBoardingPass = useTerminalStore((s) => s.openBoardingPass);
  const visited = useTerminalStore((s) => s.visited);

  return (
    <div
      className="w-full rounded-sm border border-hazel-dark/40 bg-[#1f1a12] terminal-texture"
      role="region"
      aria-label="Flight departure board"
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-hazel-dark/40">
        <h2 className="font-display text-ivory tracking-[0.15em] text-xs md:text-sm uppercase">
          Departures
        </h2>
        <span className="font-mono text-hazel-light text-[10px] md:text-xs uppercase tracking-widest">
          All Flights On Time
        </span>
      </div>

      {/* header row */}
      <div className="hidden md:grid grid-cols-[90px_1fr_70px_100px_120px] gap-2 px-5 py-2 text-[10px] uppercase tracking-[0.15em] text-hazel-light/70 font-mono border-b border-hazel-dark/30">
        <span>Flight</span>
        <span>Destination</span>
        <span>Gate</span>
        <span>Boarding</span>
        <span>Status</span>
      </div>

      <ul>
        {flights.map((f, idx) => {
          const isVisited = visited.includes(f.code as FlightCode);
          return (
            <motion.li
              key={f.code}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
            >
              <button
                onClick={() => openBoardingPass(f.code as FlightCode)}
                className="focus-ring w-full text-left grid grid-cols-2 md:grid-cols-[90px_1fr_70px_100px_120px] gap-2 items-center px-5 py-3.5 border-b border-hazel-dark/20 hover:bg-hazel-dark/40 transition-colors group"
              >
                <span className="font-mono text-ivory text-sm md:text-base tracking-wide">
                  {f.code}
                </span>
                <span className="col-span-2 md:col-span-1 font-display text-ivory text-sm md:text-base tracking-wide">
                  <SplitFlapRow text={f.destination} rowDelay={idx * 120} />
                </span>
                <span className="hidden md:block font-mono text-hazel-light text-sm">
                  {f.gate}
                </span>
                <span className="hidden md:block font-mono text-hazel-light text-sm">
                  {f.boardingTime}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isVisited ? "bg-hazel-light" : "bg-amber-signal"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] md:text-xs tracking-widest text-amber-signal group-hover:text-ivory transition-colors">
                    {isVisited ? "VISITED" : "BOARDING"}
                  </span>
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
