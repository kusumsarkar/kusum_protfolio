import type { Metadata } from "next";
import { DestinationShell } from "@/components/shared/DestinationShell";
import { DutyFreeShowcase } from "@/components/destinations/DutyFreeShowcase";
import { passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${passenger.fullName}`,
  description: "Media, hosting, and event marketing work.",
};

export default function ProjectsPage() {
  return (
    <DestinationShell
      code="PR505"
      gate="E5"
      eyebrow="Duty-Free"
      title="Projects"
    >
      <p className="text-text-muted max-w-2xl mb-8 text-[15px] leading-relaxed">
        Featured work across media, hosting, and event marketing. Select an
        item for the full story.
      </p>
      <DutyFreeShowcase />
    </DestinationShell>
  );
}
