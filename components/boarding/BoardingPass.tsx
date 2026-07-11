"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, Plane } from "lucide-react";
import { useTerminalStore } from "@/lib/store";
import { flights, passenger, airportCode } from "@/lib/data";
import { AnimatedBarcode } from "./AnimatedBarcode";
import type { FlightCode } from "@/types";

function seatFor(code: string) {
  const n = code.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const row = 10 + (n % 20);
  const letters = "ABCDEF";
  return `${row}${letters[n % letters.length]}`;
}

export function BoardingPass() {
  const active = useTerminalStore((s) => s.activeBoardingPass);
  const close = useTerminalStore((s) => s.closeBoardingPass);
  const markVisited = useTerminalStore((s) => s.markVisited);
  const router = useRouter();

  const flight = flights.find((f) => f.code === active);

  const board = () => {
    if (!flight) return;
    markVisited(flight.code as FlightCode);
    close();
    router.push(flight.href);
  };

  return (
    <AnimatePresence>
      {flight && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-text-dark/50 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Boarding pass for flight ${flight.code}`}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="relative w-full max-w-xl bg-ivory border border-border rounded-sm shadow-[0_20px_50px_-15px_rgba(44,44,44,0.35)] overflow-hidden"
          >
            <button
              onClick={close}
              className="focus-ring absolute top-3 right-3 z-10 p-1.5 rounded-full bg-ivory/90 hover:bg-beige text-text-muted"
              aria-label="Close boarding pass"
            >
              <X size={16} />
            </button>

            <div className="grid grid-cols-[1fr_auto]">
              {/* Main stub */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-hazel">
                      Boarding Pass
                    </p>
                    <p className="font-display font-semibold text-lg text-text-dark">
                      {airportCode} Airlines
                    </p>
                  </div>
                  <Plane className="text-hazel" size={22} aria-hidden="true" />
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                  <Field label="Passenger" value={passenger.fullName} wide />
                  <Field label="From" value={airportCode} mono />
                  <Field label="To" value={flight.code} mono />
                  <Field label="Flight" value={flight.code} mono />
                  <Field label="Gate" value={flight.gate} mono />
                  <Field label="Seat" value={seatFor(flight.code)} mono />
                  <Field label="Boarding Time" value={flight.boardingTime} mono />
                  <Field label="Destination" value={flight.destination} />
                </div>

                <div className="mt-6 pt-5 border-t border-dashed border-border">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2">
                    Scan to board
                  </p>
                  <AnimatedBarcode seed={flight.code} />
                </div>
              </div>

              {/* Tear stub */}
              <div className="relative w-24 md:w-28 bg-beige border-l border-dashed border-border flex flex-col items-center justify-between py-6">
                <span className="font-mono text-xs text-hazel-dark [writing-mode:vertical-rl] rotate-180 tracking-widest">
                  {flight.code}
                </span>
                <Plane
                  className="text-hazel rotate-90"
                  size={18}
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] text-text-muted [writing-mode:vertical-rl] rotate-180">
                  {seatFor(flight.code)}
                </span>
              </div>
            </div>

            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <button
                onClick={board}
                className="focus-ring w-full bg-hazel hover:bg-hazel-dark text-ivory font-display text-sm tracking-[0.1em] uppercase py-3.5 rounded-sm transition-colors"
              >
                Board Flight → {flight.destination}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  mono,
  wide,
}: {
  label: string;
  value: string;
  mono?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-0.5">
        {label}
      </p>
      <p
        className={`text-text-dark text-sm md:text-base ${
          mono ? "font-mono tracking-wide" : "font-display font-medium"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
