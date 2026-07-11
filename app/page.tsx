"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalHero } from "@/components/terminal/TerminalHero";
import { DepartureBoard } from "@/components/terminal/DepartureBoard";
import { TerminalMap } from "@/components/terminal/TerminalMap";
import { AirportClock } from "@/components/terminal/AirportClock";
import { BoardingStubCollection } from "@/components/shared/BoardingStubCollection";
import { BoardingPass } from "@/components/boarding/BoardingPass";
import { airportName, airportCode } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useTerminalStore } from "@/lib/store";

export default function TerminalPage() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [mapView, setMapView] = useState(false);
  const visited = useTerminalStore((s) => s.visited);
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const val = searchParams.get("checkedIn");
      if (val === "1" || val === "true") setCheckedIn(true);
    } catch (e) {
      // ignore in SSR or if searchParams isn't available yet
    }
  }, [searchParams]);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#1f1a12] flex flex-col"
    >
      <AnimatePresence mode="wait">
        {!checkedIn ? (
          <TerminalHero key="hero" onCheckIn={() => setCheckedIn(true)} />
        ) : (
          <motion.div
            key="board"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col px-6 md:px-10 py-8"
          >
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <p className="font-mono text-hazel-light text-xs tracking-[0.25em] uppercase">
                  {airportCode} Terminal
                </p>
                <h1 className="font-display font-semibold text-ivory text-2xl md:text-4xl mt-1 tracking-tight">
                  {airportName}
                </h1>
              </div>
              <AirportClock />
            </div>

            <div className="flex items-center gap-2 mb-5">
              <button
                onClick={() => setMapView(false)}
                aria-pressed={!mapView}
                className={`focus-ring px-3.5 py-2 text-xs font-mono tracking-widest uppercase rounded-sm border transition-colors ${
                  !mapView
                    ? "bg-hazel border-hazel text-ivory"
                    : "border-hazel-dark/40 text-hazel-light hover:bg-hazel-dark/30"
                }`}
              >
                Departure Board
              </button>
              <button
                onClick={() => setMapView(true)}
                aria-pressed={mapView}
                className={`focus-ring px-3.5 py-2 text-xs font-mono tracking-widest uppercase rounded-sm border transition-colors ${
                  mapView
                    ? "bg-hazel border-hazel text-ivory"
                    : "border-hazel-dark/40 text-hazel-light hover:bg-hazel-dark/30"
                }`}
              >
                Terminal Map
              </button>
            </div>

            <div className="flex-1">
              {mapView ? <TerminalMap /> : <DepartureBoard />}
            </div>

            {visited.length > 0 && (
              <div className="mt-6">
                <BoardingStubCollection variant="dark" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <BoardingPass />
    </main>
  );
}
