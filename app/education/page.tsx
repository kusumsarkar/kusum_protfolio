import type { Metadata } from "next";
import { DestinationShell } from "@/components/shared/DestinationShell";
import { RouteTimeline } from "@/components/destinations/RouteTimeline";
import { education, training, passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `Education ${passenger.fullName}`,
  description:
    "Explore Kusum Sarkar's academic background, including BBA studies and earlier schooling in Nepal.",
};

export default function EducationPage() {
  return (
    <DestinationShell
      code="ED202"
      gate="B2"
      eyebrow="Flight Route"
      title="Education"
    >
      <p className="text-text-muted max-w-2xl mb-10 text-[15px] leading-relaxed">
        Every academic milestone plotted as a stop along the route —
        from Secondary Education to an in-progress Bachelor of Business
        Administration.
      </p>

      <RouteTimeline entries={[...education].reverse()} />

      <div className="mt-12 max-w-xl border-t border-border pt-6">
        <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-2">
          {training.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {training.description}
        </p>
      </div>
    </DestinationShell>
  );
}
