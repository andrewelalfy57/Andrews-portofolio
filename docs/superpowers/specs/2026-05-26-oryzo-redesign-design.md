# Portfolio Redesign — Oryzo-Inspired (Tier B)

**Date:** 2026-05-26
**Reference:** https://oryzo.ai/
**Tier chosen:** B — Faithful scroll feel, no 3D/WebGL, light-only.

## Goal

Reskin Andrew's portfolio to adopt the visual language and scroll choreography of oryzo.ai while keeping all real career content (no satire).

## Visual Language

| Token | Value |
|---|---|
| Background | `#FAFAF8` (warm off-white) |
| Foreground | `#0A0A0A` (near-black) |
| Muted | `#737373` |
| Border | `#E5E5E0` |
| Accent | `#C9A66B` (warm tan, used sparingly — only on small inline marks) |
| Display font | Syne (kept), used bolder + larger |
| Mono font | Space Mono (kept) for tiny labels |

**Removed:** mesh-gradient, glass morphism, glow effects, indigo/pink dual-accent gradients, pulse-glow, theme toggle, dark mode, floating orbs, animated underlines, decorative grids.

**Added:** hairline borders, oversized declarative typography, generous whitespace, deadpan-confident copy style ("Engineering experiences. Built for scale.").

## Scroll Choreography

**Library additions:** `lenis` (smooth-scroll). Framer Motion (already installed) handles all reveals and pinned progress.

**Patterns used:**

1. **Inertia smooth-scroll (global)** — Lenis wraps the page. Wheel and touch decay with momentum easing. RAF loop driven from a `SmoothScrollProvider` client component mounted in `layout.tsx`.

2. **Word/line reveal on enter** — Headlines split by word; each word wrapped in an `overflow: hidden` mask, translated 100% Y, then animated to 0% on `whileInView` with staggered delay (0.04s per word). Used in Hero and every section title.

3. **Pinned section with internal progress** — At least one section (Experience) becomes a sticky container: the section title pins to the left while the timeline scrolls on the right. Implementation via `position: sticky` on the title column, no JS needed.

4. **Scroll-tied transforms** — Hero headline scales subtly down and fades as user scrolls (existing `useScroll`/`useTransform` pattern, kept and refined). About-section statistics counters tick up when in view.

5. **Section "chapter" handoff** — Each section opens with a small monospace label ("01 / About", "02 / Experience"…) that fades in just before the headline reveals. Mimics oryzo's measured pacing.

6. **Reduced-motion respect** — All scroll animations short-circuit when `prefers-reduced-motion: reduce`.

## Section-by-Section

**Navbar.** Minimal. "AA" mark left, anchor links center, Resume link right (text link, not pill button). Removes theme toggle, hamburger animations, glass background. Becomes a thin top bar with hairline bottom border on scroll.

**Hero.** Full viewport. Centered, ultra-large headline split across multiple lines: *"Engineering experiences. / Built for scale. / Shipped at speed."* Below: small mono caption with location + role. Two text links ("View work →" / "Get in touch →") replacing pill CTAs. Subtle scroll cue at bottom.

**About.** Two-column. Left: pinned label "01 / About". Right: a single long paragraph in larger type, followed by a 2×2 grid of oversized statistics (each number ~120px). Drop the four-card "highlights" grid — fold those into the prose.

**Experience.** Pinned-title layout. Left column sticks ("02 / Experience"). Right column is a vertically-stacked list of roles separated by hairline rules, each role having: role title (large), company (mono caption), period (mono caption right-aligned), then bullets. No glass cards, no timeline dots.

**Skills.** Apple-style comparison table. Categories as rows ("Languages", "Frontend", "Backend", "Cloud", "Specialties"), with skills inside each row as inline mono tags. Removes the proficiency bars and the colored category accents. Single hairline borders.

**Projects.** Stack of full-width project blocks (not a grid). Each block: huge project title, company in mono, paragraph, metrics line, tag line. Hairline separator between projects. Drop colored gradient backgrounds and icon bubbles.

**Contact.** Oversized "Let's talk." headline. Two-column: left lists contact channels as plain text links; right is a minimal form (label-less inputs with placeholders and bottom-border-only styling). Submit is a text link with arrow, not a filled button.

**Footer.** Single row. Name left, three social text-links center, copyright right. Hairline top border.

## File Changes

| File | Change |
|---|---|
| `app/globals.css` | Rewrite tokens; remove dark-mode block, glass/glow/mesh utilities; add type-mask animation; new section-padding scale |
| `app/layout.tsx` | Drop `ThemeProvider`; remove `suppressHydrationWarning`; add `<SmoothScrollProvider>` wrapper; light-only |
| `components/ThemeProvider.tsx` | Delete |
| `components/SmoothScrollProvider.tsx` | New — Lenis instance + RAF loop |
| `components/RevealText.tsx` | New — reusable word/line mask reveal |
| `components/Navbar.tsx` | Rewrite minimal |
| `components/Hero.tsx` | Rewrite minimal, large type, scroll-tied subtle scale |
| `components/About.tsx` | Rewrite two-column with stat grid |
| `components/Experience.tsx` | Rewrite pinned-title layout |
| `components/Skills.tsx` | Rewrite as comparison table |
| `components/Projects.tsx` | Rewrite stacked blocks |
| `components/Contact.tsx` | Rewrite minimal form |
| `components/Footer.tsx` | Rewrite single-row |
| `package.json` | Add `lenis` |

## Content Preserved

All factual content (name, roles, companies, periods, bullets, projects, metrics, stack, contact details, languages) — unchanged. Only copy *style* shifts toward declarative short sentences.

## Out of Scope

- Dark mode
- 3D / WebGL
- New routes
- Backend / EmailJS wiring (form remains stubbed as before)
- Resume PDF (kept as `/andrew-alalfy-resume.pdf` — no change)
- SEO/metadata (kept)

## Acceptance

- `npm run dev` starts cleanly
- `npm run build` succeeds
- `npm run lint` clean
- Visiting `/` shows light-only page with Lenis smooth-scroll active
- All seven sections render in order with content from current site preserved
- Scroll feels momentum-eased, not native
- Headlines reveal word-by-word on enter
- Experience section has a pinned/sticky title behavior
- No console errors
- Respects `prefers-reduced-motion`
