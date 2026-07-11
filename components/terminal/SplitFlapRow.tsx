"use client";

import { SplitFlapChar } from "./SplitFlapChar";

export function SplitFlapRow({
  text,
  size = "md",
  rowDelay = 0,
}: {
  text: string;
  size?: "sm" | "md" | "lg";
  rowDelay?: number;
}) {
  const chars = text.split("");
  return (
    <span className="inline-flex">
      {chars.map((c, i) => (
        <SplitFlapChar
          key={`${i}-${c}-${text}`}
          target={c}
          delay={rowDelay + i * 35}
          size={size}
        />
      ))}
    </span>
  );
}
