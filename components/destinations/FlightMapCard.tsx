"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import type { ExperienceEntry } from "@/types";

export function FlightMapCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="border border-border rounded-sm bg-ivory overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="focus-ring w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-beige/60 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full bg-beige border border-hazel-light/60 flex items-center justify-center text-hazel shrink-0">
            <MapPin size={14} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display font-semibold text-base md:text-lg">
              {entry.role}
            </p>
            <p className="text-text-muted text-sm">
              {entry.organization} · {entry.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-hazel-dark hidden sm:inline">
            {entry.duration}
          </span>
          <ChevronDown
            size={16}
            className={`text-hazel transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border">
              <p className="font-mono text-xs text-hazel-dark sm:hidden mb-2">
                {entry.duration}
              </p>
              <ul className="space-y-1.5">
                {entry.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="text-sm text-text-dark flex gap-2 leading-relaxed"
                  >
                    <span className="text-hazel">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
