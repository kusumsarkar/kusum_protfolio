"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import type { ProjectEntry } from "@/types";

export function DutyFreeShowcase() {
  const [active, setActive] = useState<ProjectEntry | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.button
            key={p.name}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="focus-ring text-left border border-border rounded-sm bg-ivory p-5 hover:border-hazel transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="h-8 w-8 rounded-full bg-beige border border-hazel-light/60 flex items-center justify-center text-hazel">
                <Sparkles size={14} aria-hidden="true" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                {p.role}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-1.5 group-hover:text-hazel-dark transition-colors">
              {p.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-3 line-clamp-3">
              {p.overview}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wide border border-hazel-light/60 text-hazel-dark rounded-sm px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-text-dark/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-ivory border border-border rounded-sm p-7 shadow-[0_20px_50px_-15px_rgba(44,44,44,0.35)]"
            >
              <button
                onClick={() => setActive(null)}
                className="focus-ring absolute top-3 right-3 p-1.5 rounded-full hover:bg-beige text-text-muted"
                aria-label="Close project details"
              >
                <X size={16} />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazel mb-2">
                {active.role}
              </p>
              <h3 className="font-display font-semibold text-2xl mb-4">
                {active.name}
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-display font-medium text-hazel-dark uppercase tracking-wide text-xs mb-1">
                    Overview
                  </dt>
                  <dd className="text-text-dark leading-relaxed">
                    {active.overview}
                  </dd>
                </div>
                <div>
                  <dt className="font-display font-medium text-hazel-dark uppercase tracking-wide text-xs mb-1">
                    Outcome
                  </dt>
                  <dd className="text-text-dark leading-relaxed">
                    {active.outcome}
                  </dd>
                </div>
                <div>
                  <dt className="font-display font-medium text-hazel-dark uppercase tracking-wide text-xs mb-1">
                    Business Impact
                  </dt>
                  <dd className="text-text-dark leading-relaxed">
                    {active.impact}
                  </dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
