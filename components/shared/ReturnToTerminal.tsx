"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ReturnToTerminal({ light }: { light?: boolean }) {
  return (
    <Link
      href="/?checkedIn=1"
      className={`focus-ring inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-mono px-4 py-2.5 rounded-sm border transition-colors ${
        light
          ? "border-ivory/30 text-ivory hover:bg-ivory/10"
          : "border-border text-text-muted hover:text-hazel-dark hover:border-hazel"
      }`}
    >
      <ArrowLeft size={14} aria-hidden="true" />
      Return to Terminal
    </Link>
  );
}
