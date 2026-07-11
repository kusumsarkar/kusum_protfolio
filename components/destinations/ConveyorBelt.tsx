"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { skills } from "@/lib/data";
import type { SkillEntry } from "@/types";

const CATEGORIES: Array<SkillEntry["category"] | "All"> = [
  "All",
  "Communication",
  "Leadership",
  "Business",
  "Technical",
  "Other",
];

export function ConveyorBelt() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");

  const visible =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter skills by category">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`focus-ring px-3.5 py-2 text-xs font-mono tracking-widest uppercase rounded-sm border transition-colors ${
              filter === c
                ? "bg-hazel border-hazel text-ivory"
                : "border-border text-text-muted hover:border-hazel hover:text-hazel-dark"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="relative border-t-2 border-b-2 border-hazel-light/50 py-8 overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(90deg,var(--hazel-light)_0,var(--hazel-light)_16px,transparent_16px,transparent_32px)] opacity-40"
          aria-hidden="true"
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className="border border-border rounded-sm bg-ivory p-4 relative"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-sm bg-beige border border-hazel-light/60 flex items-center justify-center text-hazel shrink-0">
                    <Briefcase size={13} aria-hidden="true" />
                  </span>
                  <p className="font-display font-medium text-sm">{s.name}</p>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-hazel-dark border border-hazel-light/60 rounded-sm px-1.5 py-0.5 shrink-0">
                  {s.category}
                </span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed mb-3">
                {s.description}
              </p>
              <p className="sr-only">Confidence level {s.level} out of 5</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
