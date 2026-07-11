"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { ReturnToTerminal } from "./ReturnToTerminal";
import { BoardingStubCollection } from "./BoardingStubCollection";
import { useTerminalStore } from "@/lib/store";
import type { FlightCode } from "@/types";

export function DestinationShell({
  code,
  gate,
  title,
  eyebrow,
  dark,
  children,
}: {
  code: FlightCode;
  gate: string;
  title: string;
  eyebrow: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const markVisited = useTerminalStore((s) => s.markVisited);

  useEffect(() => {
    markVisited(code);
  }, [code, markVisited]);

  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen flex flex-col ${
        dark ? "bg-[#1f1a12] text-ivory" : "bg-ivory text-text-dark"
      }`}
    >
      <motion.div
        initial={{ x: "-8%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex items-center gap-2 px-6 md:px-10 pt-4 text-hazel ${
          dark ? "opacity-90" : ""
        }`}
        aria-hidden="true"
      >
        <Plane size={16} />
        <span className="font-mono text-[11px] tracking-widest">
          {code} EN ROUTE
        </span>
      </motion.div>

      <header className="px-6 md:px-10 pt-4 pb-6 flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-hazel-light/30">
        <div>
          <p
            className={`text-[11px] uppercase tracking-[0.25em] font-mono ${
              dark ? "text-hazel-light" : "text-hazel"
            }`}
          >
            {eyebrow} · Gate {gate}
          </p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl mt-2 tracking-tight">
            {title}
          </h1>
        </div>
        <ReturnToTerminal light={dark} />
      </header>

      <div className="flex-1 px-6 md:px-10 py-8 md:py-10">{children}</div>

      <footer className="px-6 md:px-10 py-6 border-t border-dashed border-hazel-light/30">
        <BoardingStubCollection variant={dark ? "dark" : "light"} />
      </footer>
    </motion.main>
  );
}
