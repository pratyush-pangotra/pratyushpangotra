# Pratyush Pangotra — Portfolio

Engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS,
Framer Motion, and GSAP.

## Design concept

The site is styled after a PCB / circuit board: a deep matte-green substrate
background, copper-trace accents, and a signal-teal highlight color. The
signature element is the animated **signal trace** running down the left
edge of the page (`components/SignalTrace.tsx`) — a copper trace with a
glowing signal dot that travels down as you scroll, connecting each section
like components on a board. Headings use JetBrains Mono to read like a
schematic; body copy uses Inter for readability.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx      — fonts, SEO metadata
  page.tsx         — assembles sections + JSON-LD
  globals.css      — design tokens as CSS utilities
components/
  Nav.tsx
  Hero.tsx
  SignalTrace.tsx  — signature scroll-linked circuit trace
  Timeline.tsx
  Projects.tsx / ProjectCard.tsx / ProjectVisual.tsx
  Skills.tsx
  Contact.tsx
lib/
  data.ts          — all copy/content lives here
```

## Editing content

All copy (projects, skills, timeline, personal info) lives in `lib/data.ts`.
Update that file to change site content without touching components.

## Deploying

Deploy directly to [Vercel](https://vercel.com/new) — no extra configuration
needed. Update `siteUrl` in `app/layout.tsx` to your real domain before
deploying for correct SEO/OG metadata.
