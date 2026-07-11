import { Users } from "lucide-react";
import { references } from "@/lib/data";

export function ReferencesPanel() {
  return (
    <div className="border border-border rounded-sm bg-ivory p-5">
      <div className="flex items-center gap-2 mb-4">
        <Users size={15} className="text-hazel" aria-hidden="true" />
        <h3 className="font-display font-medium text-sm uppercase tracking-wide text-hazel-dark">
          References
        </h3>
      </div>
      <ul className="space-y-3">
        {references.map((r) => (
          <li key={r.name} className="text-sm">
            <p className="font-display font-medium text-text-dark">
              {r.name}
            </p>
            <p className="text-text-muted text-xs">
              {r.role}
              {r.organization ? ` · ${r.organization}` : ""}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-text-muted text-xs mt-4 pt-4 border-t border-dashed border-border">
        Contact details available on request.
      </p>
    </div>
  );
}
