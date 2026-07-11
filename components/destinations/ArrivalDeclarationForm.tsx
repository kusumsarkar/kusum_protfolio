"use client";

import { useState } from "react";
import { passenger } from "@/lib/data";

export function ArrivalDeclarationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${passenger.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || "a visitor"}`
  )}&body=${encodeURIComponent(
    `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
  )}`;

  return (
    <form
      className="border border-border rounded-sm bg-ivory p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazel mb-1">
        Arrival Declaration Card
      </p>
      <h3 className="font-display font-semibold text-xl mb-6">
        Get in Touch
      </h3>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-1.5"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus-ring w-full border border-border rounded-sm px-3.5 py-2.5 bg-beige/40 text-sm text-text-dark placeholder:text-text-muted/60"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-1.5"
          >
            Return Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus-ring w-full border border-border rounded-sm px-3.5 py-2.5 bg-beige/40 text-sm text-text-dark placeholder:text-text-muted/60"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-[11px] uppercase tracking-[0.15em] text-text-muted mb-1.5"
        >
          Purpose of Visit
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="focus-ring w-full border border-border rounded-sm px-3.5 py-2.5 bg-beige/40 text-sm text-text-dark placeholder:text-text-muted/60 resize-none"
          placeholder="Tell me about the opportunity..."
        />
      </div>

      <button
        type="submit"
        className="focus-ring bg-hazel hover:bg-hazel-dark text-ivory font-display text-sm tracking-[0.1em] uppercase px-6 py-3 rounded-sm transition-colors"
      >
        Submit Declaration
      </button>
      <p className="text-text-muted text-xs mt-3">
        Opens your email client, addressed to {passenger.email}.
      </p>
    </form>
  );
}
