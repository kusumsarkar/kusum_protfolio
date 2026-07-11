"use client";

import { useEffect, useRef, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

function randomChar() {
  return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

export function SplitFlapChar({
  target,
  delay = 0,
  size = "md",
}: {
  target: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}) {
  const [display, setDisplay] = useState(" ");
  const [flipping, setFlipping] = useState(false);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const t = target.toUpperCase();

    if (reducedMotion.current) {
      setDisplay(t);
      return;
    }

    let cancelled = false;
    let steps = 0;
    const maxSteps = 6 + Math.floor(Math.random() * 4);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (cancelled) return;
        setFlipping(true);
        steps += 1;
        if (steps >= maxSteps) {
          setDisplay(t);
          clearInterval(interval);
        } else {
          setDisplay(randomChar());
        }
      }, 55);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
    };
  }, [target, delay]);

  const sizeClasses =
    size === "lg"
      ? "w-6 h-8 text-lg md:w-7 md:h-9 md:text-xl"
      : size === "sm"
      ? "w-3.5 h-5 text-xs"
      : "w-4.5 h-6 text-sm md:w-5 md:h-7 md:text-base";

  return (
    <span
      className={`flap relative inline-flex items-center justify-center bg-hazel-dark text-ivory rounded-[2px] mx-[1px] overflow-hidden select-none ${sizeClasses}`}
      style={{
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
      }}
      aria-hidden="true"
    >
      <span
        className="relative"
        style={{
          transform: flipping ? "translateY(0)" : undefined,
        }}
      >
        {display}
      </span>
      <span
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/30"
        aria-hidden="true"
      />
    </span>
  );
}
