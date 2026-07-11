"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/lib/data";

export function AchievementBadges() {
  return (
    <div>
      <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-4">
        Destination Badges — Achievements
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex gap-3 border border-border rounded-sm p-4 bg-ivory"
          >
            <span className="shrink-0 h-9 w-9 rounded-full bg-beige border border-hazel-light/60 flex items-center justify-center text-hazel">
              <Award size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display font-medium text-sm text-text-dark">
                {a.title}
              </p>
              <p className="text-text-muted text-xs mt-1 leading-relaxed">
                {a.description}
              </p>
              {a.date && (
                <p className="font-mono text-[10px] text-hazel-dark mt-1.5 uppercase tracking-wide">
                  {a.date}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
