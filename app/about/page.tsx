import type { Metadata } from "next";
import { DestinationShell } from "@/components/shared/DestinationShell";
// Removed AircraftWindow to simplify layout
import { passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `About ${passenger.fullName}`,
  description:
    "Meet Kusum Sarkar, a BBA student in marketing and communications and a content creator from Butwal, Nepal, with experience in content creation, public speaking, event marketing, and frontend development.",
};

export default function AboutPage() {
  return (
    <DestinationShell
      code="AB101"
      gate="A1"
      eyebrow="Now Boarding"
      title="About Me"
    >
      <div className="gap-10 md:gap-14">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazel mb-2">
            In-Flight Magazine · Passenger Profile
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-1">
            {passenger.fullName}
          </h2>
          <p className="text-text-muted text-sm mb-6">{passenger.title}</p>

          <div className="space-y-6 text-[15px] leading-relaxed text-text-dark">
            <section>
              <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-1.5">
                Introduction
              </h3>
              <p>{passenger.summary}</p>
            </section>

            <section>
              <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-1.5">
                Career Goal
              </h3>
              <p>{passenger.objective}</p>
            </section>

            <section>
              <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-1.5">
                Based In
              </h3>
              <p className="font-mono text-sm">{passenger.location}</p>
            </section>

            <section>
              <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-1.5">
                Interests
              </h3>
              <p>
                Content creation, public speaking, media hosting, event
                sponsorship &amp; marketing, frontend development, and
                self-directed learning in scripting and astrology.
              </p>
            </section>

            <section className="border-t border-border pt-5">
              <h3 className="font-display font-medium text-hazel-dark text-sm uppercase tracking-wide mb-2.5">
                Strengths
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-text-muted">
                {[
                  "Communication & teamwork",
                  "Hardworking under pressure",
                  "Respect for individual dignity",
                  "Audience connection",
                  "Empathy",
                  "Versatility",
                ].map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-hazel">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </DestinationShell>
  );
}
