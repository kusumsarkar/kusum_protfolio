"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, GraduationCap } from "lucide-react";
import type { EducationEntry } from "@/types";

export function RouteTimeline({ entries }: { entries: EducationEntry[] }) {
  return (
    <div className="relative pl-2">
      <div
        className="absolute left-[15px] top-3 bottom-3 w-px bg-hazel-light/50"
        aria-hidden="true"
      />
      <ol className="space-y-10">
        {entries.map((e, i) => (
          <motion.li
            key={e.degree}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-10"
          >
            <span className="absolute left-0 top-0.5 flex items-center justify-center h-8 w-8 rounded-full bg-ivory border-2 border-hazel text-hazel">
              {i === entries.length - 1 ? (
                <PlaneTakeoff size={14} aria-hidden="true" />
              ) : (
                <GraduationCap size={14} aria-hidden="true" />
              )}
            </span>

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="font-display font-semibold text-lg md:text-xl">
                {e.degree}
              </h3>
              <span
                className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border ${
                  e.status === "In Progress"
                    ? "border-amber-signal text-amber-signal"
                    : "border-hazel-light text-hazel-dark"
                }`}
              >
                {e.status}
              </span>
            </div>
            <p className="text-text-dark text-sm">
              {e.institution} · {e.board}
            </p>
            <p className="font-mono text-xs text-text-muted mt-1">
              {e.year}
              {e.score !== "—" ? ` · ${e.score}` : ""}
            </p>
            {e.note && (
              <p className="text-text-muted text-sm mt-1.5 italic">
                {e.note}
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
