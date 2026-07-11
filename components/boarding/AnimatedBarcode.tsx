"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function AnimatedBarcode({ seed }: { seed: string }) {
  const bars = useMemo(() => {
    const seedHash = seed
      .split("")
      .reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) % 997, 7);

    return Array.from({ length: 38 }, (_, i) => {
      const step = (seedHash * (i + 1) * 9301 + 49297) % 233280;
      return 1 + (step % 3);
    });
  }, [seed]);

  return (
    <div
      className="flex items-end h-10 gap-[2px]"
      role="img"
      aria-label={`Boarding barcode for ${seed}`}
    >
      {bars.map((w, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.012, duration: 0.2 }}
          style={{
            width: w,
            transformOrigin: "bottom",
          }}
          className="bg-text-dark h-full inline-block"
        />
      ))}
    </div>
  );
}
