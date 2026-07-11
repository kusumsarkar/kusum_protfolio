import { passenger } from "@/lib/data";

export function AircraftWindow() {
  const initials = passenger.fullName
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative mx-auto md:mx-0 w-56 md:w-full max-w-[280px]">
      <div className="relative aspect-[4/5] rounded-[46%/38%] bg-gradient-to-b from-[#dfe7ea] to-[#c9d3d6] border-[10px] border-hazel-dark p-2 shadow-[0_10px_30px_-10px_rgba(44,44,44,0.35)]">
        <div className="absolute inset-2 rounded-[42%/34%] border border-ivory/60" />
        <div className="w-full h-full rounded-[42%/34%] bg-[radial-gradient(circle_at_50%_35%,#f2f6f7_0%,#c2ccd0_75%)] flex items-center justify-center overflow-hidden">
          <span className="font-display font-semibold text-5xl text-hazel-dark/70 tracking-tight">
            {initials}
          </span>
        </div>
      </div>
      <p className="text-center mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        Window Seat · {passenger.city}
      </p>
    </div>
  );
}
