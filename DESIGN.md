---
name: Viaja America
description: Sitio de marketing para agencia de viajes — vuelos, autos, alojamiento, paquetes y destinos en toda America.
colors:
  brand-blue: "#18526e"
  brand-blue-light: "#24759e"
  brand-blue-dark: "#113a4e"
  surface-deep: "#0f172a"
  surface-card: "#1e293b"
  ink-light: "#f8fafc"
  ink-muted: "#7b7a7a"
  border-dark: "#334155"
  destructive: "#7f1d1d"
typography:
  display:
    fontFamily: "Outfit, var(--font-heading), sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Outfit, var(--font-heading), sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, var(--font-sans), sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "7.2px"
  md: "9.6px"
  lg: "12px"
  xl: "16.8px"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0 10px"
  button-primary-hover:
    backgroundColor: "{colors.brand-blue}"
  button-outline:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.lg}"
---

# Design System: Viaja America

## 1. Overview

**Creative North Star: "The Night Flight Deck"**

Viaja America's UI runs on a deep navy canvas (`--background: #0f172a`) lit by a single
confident brand blue (`#18526e` / `#24759e` light / `#113a4e` dark) — the site is forced
into dark mode site-wide (`<html class="dark">`), so this navy-and-blue pairing is the
*actual* rendered system, not the light tokens sitting unused in `:root`. The mood is
aventurera, vibrante, inspiradora: confident enough for corporate travel, warm enough to
make someone want to book a trip tonight. It explicitly rejects the look of a generic
booking engine or a 2010s travel agency — no beige panels, no drop-shadow-heavy skeuomorphic
buttons, no stock-photo gradients laid over text.

**Key Characteristics:**
- Deep navy surface, brand-blue accent used deliberately, not everywhere.
- `Outfit` for headings (geometric, confident), `Inter` for body (neutral, highly legible).
- Flat-first components lifted with border + soft focus rings, not heavy drop shadows.
- Motion is a supporting layer (framer-motion/gsap/lenis) — smooth entrances, never flashy.

## 2. Colors

The palette is a single-hue system: one brand blue at three depths, laid over a navy
neutral scale. There is no secondary or tertiary accent — restraint is the point.

### Primary
- **Brand Blue** (`#18526e`): primary buttons, links, active nav states, icons, focus rings. The one color allowed to carry meaning (CTA, selection, brand mark).
- **Brand Blue Light** (`#24759e`): hover/lighter accents, gradient stops, secondary emphasis on dark surfaces.
- **Brand Blue Dark** (`#113a4e`): pressed states, deep accent backgrounds, overlays on imagery.

### Neutral
- **Surface Deep** (`#0f172a`): the page background site-wide (forced dark mode).
- **Surface Card** (`#1e293b`): cards, popovers, dropdowns, elevated panels.
- **Ink Light** (`#f8fafc`): primary text on the navy surface.
- **Ink Muted** (`#7b7a7a`): secondary/muted text — **check this against `#0f172a`; it is borderline for WCAG AA and should be audited, not assumed passing.**
- **Border Dark** (`#334155`): dividers, input borders, card outlines.

### Named Rules
**The One Hue Rule.** Only `brand-blue` and its two tonal steps carry color. Every other
surface is navy/slate neutral. Don't introduce a second accent hue anywhere in the site.

**The Forced-Dark Rule.** `<html class="dark">` is hardcoded in `layout.tsx` — the site
never renders its own `:root` light tokens. Treat the `.dark` values in `globals.css` as
the canonical palette; the `:root` light values are dead code until a theme toggle exists.

## 3. Typography

**Display Font:** Outfit (`--font-heading`), with sans-serif fallback
**Body Font:** Inter (`--font-sans`), with sans-serif fallback

**Character:** Outfit's geometric confidence for headings against Inter's neutral
legibility for body — a "brochure meets booking form" pairing: aspirational at the top of
the page, functional the moment the user starts reading details or filling a form.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 6vw, 4.5rem)`, 1.1): hero H1s only, one per page.
- **Headline** (600, `clamp(1.75rem, 3vw, 2.5rem)`, 1.2): section H2s (Destinations, Corporate, etc.).
- **Title** (600, `1.25rem`, 1.3): card titles, H3s.
- **Body** (400, `1rem`, 1.6): paragraphs, max 65–75ch measure.
- **Label** (500, `0.875rem`, uppercase optional): form labels, nav items, badges.

### Named Rules
**The Single Display Rule.** Every page gets exactly one Display-scale H1. If a page has
two hero-sized headings, one of them is wrong — demote it to Headline.

## 4. Elevation

Flat-by-default. Depth comes from surface-color layering (`surface-deep` → `surface-card`)
and 1px borders (`border-dark`), not drop shadows. Shadows, where used, should be soft and
shallow (ambient, not structural) — reserve anything heavier for modals/popovers that must
visually detach from the page.

### Shadow Vocabulary
- **Ambient hover** (`0 4px 16px rgba(0,0,0,0.24)`): cards and buttons on hover only, never at rest.
- **Popover/dropdown** (`0 8px 24px rgba(0,0,0,0.35)`): menus, date-picker, passenger-selector — needs to visually separate from a dark page.

### Named Rules
**The Flat-At-Rest Rule.** No card, button, or hero panel carries a shadow in its default
state. Shadows appear only in response to hover/open state.

## 5. Components

### Buttons
- **Shape:** rounded-lg (12px radius).
- **Primary:** `bg-brand-blue`, white text, `border-transparent`.
- **Hover / Focus:** primary darkens toward `brand-blue-dark`; focus-visible gets a 3px `ring-ring/50` ring — never rely on color change alone.
- **Outline / Ghost / Secondary:** transparent or `surface-card` background, brand-blue or ink-light text; consistent radius and height across all variants.

### Cards
- **Corner Style:** rounded-xl (16.8px) for content cards, rounded-lg (12px) for compact/nested elements.
- **Background:** `surface-card` (#1e293b) on `surface-deep` page background.
- **Shadow Strategy:** flat at rest per Elevation; ambient hover shadow only.
- **Border:** 1px `border-dark`, never a colored side-stripe accent.

### Inputs / Fields
- **Style:** `surface-card` background, `border-dark` 1px stroke, rounded-lg.
- **Focus:** border shifts to brand-blue, 3px ring in brand-blue/50 — must match Button focus treatment exactly (currently the two should be audited for drift).
- **Error / Disabled:** destructive-tinted border+ring for error; 50% opacity + no pointer events for disabled.

### Navigation
- **Navbar:** brand-blue active/hover state on nav links, transparent-to-solid on scroll if animated. Mobile collapses to a `Sheet` — must retain the same link styling and focus order as desktop.
- **Footer:** ink-light text on surface-deep, brand-blue for links, consistent heading scale with the rest of the site (not a separate footer-only type scale).

## 6. Do's and Don'ts

### Do:
- **Do** keep one brand-blue hue as the only accent color across all 12 pages.
- **Do** use flat cards/buttons at rest, with shadow appearing only on hover/open (Flat-At-Rest Rule).
- **Do** cap hero H1s at the Display clamp ceiling (`clamp(2.5rem, 6vw, 4.5rem)`) — one per page.
- **Do** respect `prefers-reduced-motion` on every framer-motion/gsap/lenis animation.

### Don't:
- **Don't** look like a generic OTA (Booking/Expedia) — no dense discount badges, no popup-heavy layouts.
- **Don't** look like a 2010s travel agency — no beige panels, no heavy skeuomorphic gradients, no stock-photo-under-gradient hero treatments.
- **Don't** pair a 1px border with a wide (≥16px blur) drop shadow on the same card/button.
- **Don't** use `border-left`/`border-right` as a colored accent stripe on any card or list item.
- **Don't** introduce a second accent hue; every non-neutral color must trace back to brand-blue.
