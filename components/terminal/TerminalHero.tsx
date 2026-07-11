"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff } from "lucide-react";
import { AirportClock } from "./AirportClock";
import { airportName, passenger, airportCode } from "@/lib/data";

export function TerminalHero({ onCheckIn }: { onCheckIn: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col flex-1"
    >
      <div className="flex items-start justify-between px-6 md:px-10 pt-8">
        <div className="flex items-center gap-2 text-hazel-light">
          <PlaneTakeoff size={18} aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.2em]">
            {airportCode}
          </span>
        </div>
        <AirportClock />
      </div>

      <div className="flex-1 flex flex-col items-start justify-center px-6 md:px-10 max-w-3xl">
        <p className="font-mono text-hazel-light text-xs md:text-sm tracking-[0.25em] uppercase mb-4">
          Welcome to
        </p>
        <h1 className="font-display font-semibold text-ivory text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
          {airportName}
        </h1>
        <p className="mt-6 text-hazel-light text-base md:text-lg max-w-xl leading-relaxed">
          {passenger.tagline}
        </p>

        <button
          onClick={onCheckIn}
          className="focus-ring mt-10 bg-hazel hover:bg-hazel-light hover:text-text-dark text-ivory font-display text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-sm transition-colors"
        >
          Check In
        </button>
        <p className="mt-3 text-hazel-light/60 text-xs font-mono">
          Begin boarding through {passenger.fullName.split(" ")[0]}&rsquo;s journey
        </p>
      </div>

      <div className="px-6 md:px-10 pb-8 flex items-center gap-2 text-hazel-light/50">
        <span className="h-1.5 w-1.5 rounded-full bg-hazel-light/50" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-widest uppercase">
          Terminal open · All systems normal
        </span>
      </div>
    </motion.div>
  );
}
