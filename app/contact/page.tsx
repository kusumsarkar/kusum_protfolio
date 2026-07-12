import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { DestinationShell } from "@/components/shared/DestinationShell";
import { ArrivalDeclarationForm } from "@/components/destinations/ArrivalDeclarationForm";
import { ReferencesPanel } from "@/components/destinations/ReferencesPanel";
import { passenger } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact ${passenger.fullName}`,
  description:
    "Contact Kusum Sarkar for collaborations, media opportunities, speaking engagements, or content creation work in Nepal.",
};

const details = [
  { icon: Mail, label: "Email", value: passenger.email, href: `mailto:${passenger.email}` },
  { icon: Phone, label: "Phone", value: passenger.phone, href: `tel:${passenger.phone.replace(/[^+\d]/g, "")}` },
  { icon: Globe, label: "Portfolio", value: passenger.website, href: `https://${passenger.website}` },
  { icon: MapPin, label: "Location", value: passenger.location, href: undefined },
];

export default function ContactPage() {
  return (
    <DestinationShell
      code="CT606"
      gate="F6"
      eyebrow="Arrival Terminal"
      title="Contact"
    >
      <p className="text-text-muted max-w-2xl mb-10 text-[15px] leading-relaxed">
        You&rsquo;ve reached the final destination. Here&rsquo;s how to
        continue the conversation.
      </p>

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10">
        <div className="space-y-3">
          {details.map((d) => {
            const Icon = d.icon;
            const content = (
              <div className="flex items-center gap-3 border border-border rounded-sm bg-ivory px-4 py-3.5">
                <span className="h-9 w-9 rounded-full bg-beige border border-hazel-light/60 flex items-center justify-center text-hazel shrink-0">
                  <Icon size={15} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    {d.label}
                  </p>
                  <p className="font-mono text-sm text-text-dark">{d.value}</p>
                </div>
              </div>
            );
            return d.href ? (
              <a
                key={d.label}
                href={d.href}
                className="focus-ring block hover:border-hazel rounded-sm transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={d.label}>{content}</div>
            );
          })}

          <div className="border border-dashed border-border rounded-sm px-4 py-3.5 mt-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1">
              Ground Transport
            </p>
            <p className="text-sm text-text-dark">
              Every route above connects back to this terminal — email, call,
              or visit the portfolio site directly.
            </p>
          </div>

          <div className="mt-6">
            <ReferencesPanel />
          </div>
        </div>

        <ArrivalDeclarationForm />
      </div>
    </DestinationShell>
  );
}
