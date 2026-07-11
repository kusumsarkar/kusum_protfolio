import { create } from "zustand";
import type { FlightCode } from "@/types";
import { flights } from "@/lib/data";

interface TerminalState {
  checkedIn: boolean;
  visited: FlightCode[];
  activeBoardingPass: FlightCode | null;
  setCheckedIn: (v: boolean) => void;
  markVisited: (code: FlightCode) => void;
  openBoardingPass: (code: FlightCode) => void;
  closeBoardingPass: () => void;
  completionPercent: () => number;
}

export const useTerminalStore = create<TerminalState>((set, get) => ({
  checkedIn: false,
  visited: [],
  activeBoardingPass: null,
  setCheckedIn: (v) => set({ checkedIn: v }),
  markVisited: (code) =>
    set((s) => ({
      visited: s.visited.includes(code) ? s.visited : [...s.visited, code],
    })),
  openBoardingPass: (code) => set({ activeBoardingPass: code }),
  closeBoardingPass: () => set({ activeBoardingPass: null }),
  completionPercent: () => {
    const total = flights.length;
    const done = get().visited.length;
    return Math.round((done / total) * 100);
  },
}));
