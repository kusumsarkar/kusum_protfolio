import type { Metadata } from "next";
import { DestinationShell } from "@/components/shared/DestinationShell";
import { FlightMapCard } from "@/components/destinations/FlightMapCard";
import { AchievementBadges } from "@/components/destinations/AchievementBadges";
import { experience, passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `Experience — ${passenger.fullName}`,
  description: "Professional experience across instruction, media and events.",
};

export default function ExperiencePage() {
  return (
    <DestinationShell
      code="EX303"
      gate="C3"
      eyebrow="International Route"
      title="Experience"
    >
      <p className="text-text-muted max-w-2xl mb-8 text-[15px] leading-relaxed">
        Each role plotted as a destination on the route — instruction,
        event marketing, and sponsorship work across Butwal.
      </p>

      <div className="space-y-4 max-w-3xl">
        {experience.map((e, i) => (
          <FlightMapCard key={e.role + e.organization} entry={e} index={i} />
        ))}
      </div>

      <div className="mt-14 max-w-3xl">
        <AchievementBadges />
      </div>
    </DestinationShell>
  );
}
