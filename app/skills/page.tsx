import type { Metadata } from "next";
import { DestinationShell } from "@/components/shared/DestinationShell";
import { ConveyorBelt } from "@/components/destinations/ConveyorBelt";
import { passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `Skills — ${passenger.fullName}`,
  description: "Skills and strengths, sorted by category.",
};

export default function SkillsPage() {
  return (
    <DestinationShell
      code="SK404"
      gate="D4"
      eyebrow="Baggage Claim"
      title="Skills"
    >
      <p className="text-text-muted max-w-2xl mb-8 text-[15px] leading-relaxed">
        Skills arriving on the belt — filter by category to see what&rsquo;s
        being carried.
      </p>
      <ConveyorBelt />
    </DestinationShell>
  );
}
