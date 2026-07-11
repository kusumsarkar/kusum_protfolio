# Kusum Sarkar — Airport Terminal Portfolio

A fully responsive, airport-themed portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## How it's organized

- **Terminal (`/`)** — arrival hero with a live clock and "Check In," which reveals the split-flap departure board (or the terminal gate map).
- **Boarding pass** — clicking a flight opens an animated boarding pass (barcode, seat, gate); "Board Flight" navigates to the destination and marks it visited.
- **Destinations** — each route (`/about`, `/education`, `/experience`, `/skills`, `/projects`, `/contact`) is a themed section with its own gate header, a "Return to Terminal" button, and a boarding-stub progress rail at the bottom.

```
app/                 routes (terminal + 6 destinations)
components/
  terminal/          departure board, split-flap tiles, clock, hero, map
  boarding/          boarding pass modal, animated barcode
  destinations/       per-section themed UI (route timeline, flight map cards,
                      conveyor belt skills, duty-free showcase, arrival form)
  shared/             destination shell, return button, boarding stub rail
lib/
  data.ts            all portfolio content, extracted from the CV
  store.ts           zustand store (visited flights, active boarding pass)
types/               shared TypeScript types
```

## Content

All copy lives in `lib/data.ts`, separated from presentation. To update the
portfolio later (new role, new project, corrected dates), edit that file only —
no component changes needed.

## Notes

- No profile photo, certificates, or external profile links (LinkedIn, portfolio
  site) were present in the source CV, so those sections were omitted rather
  than invented. Add a photo by replacing `AircraftWindow`'s initials treatment
  with a Next.js `<Image>`, and add links to the `details` array in
  `app/contact/page.tsx` once available.
- Fonts (Inter, IBM Plex Sans, IBM Plex Mono) are self-hosted via `@fontsource`
  packages rather than `next/font/google`, so the site has no runtime
  dependency on Google Fonts.
- Respects `prefers-reduced-motion` throughout (split-flap, page transitions).
