---
name: VerdureLeaf
colors:
  surface: '#F8F6F0'
  surface-dim: '#dadad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f1'
  surface-container: '#eeeeeb'
  surface-container-high: '#e8e8e5'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f0f1ee'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#2b694d'
  on-secondary: '#ffffff'
  secondary-container: '#b0f1cc'
  on-secondary-container: '#327053'
  tertiary: '#401b1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a302f'
  on-tertiary-container: '#d29895'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#b0f1cc'
  secondary-fixed-dim: '#94d4b1'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#0c5136'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#f5b7b4'
  on-tertiary-fixed: '#331111'
  on-tertiary-fixed-variant: '#673a39'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3e0'
  text-primary: '#1A1A1A'
  text-secondary: '#5C5C5C'
  accent: '#E07A5F'
  sale: '#C1121F'
  white: '#FFFFFF'
typography:
  headline-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  eyebrow:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  section-padding-desktop: 100px
  section-padding-mobile: 60px
  space-xs: 4px
  space-sm: 8px
  space-md: 16px
  space-lg: 32px
  space-xl: 64px
---

## Brand & Style

This design system embodies a fresh, warm, trustworthy, and sustainable aesthetic tailored for a premium direct-to-consumer microgreens brand operating across India and the UAE. The emotional response is one of wholesome vitality, earthy luxury, and natural wellbeing. 

We adopt a **Tactile / Organic Minimalism** style movement. It marries clean geometric structure with warm, tactile surfaces, abundant whitespace, and living-color accents that evoke farm-to-table freshness without feeling clinical.

## Colors

The palette is anchored by a deep forest green representing living foliage, paired with an enveloping warm cream surface that softens the digital canvas. A vibrant sage green acts as a natural bridge, while a striking coral accent commands attention for conversion-critical actions. 

- **Primary (`#1B4332`):** Used for commanding headers, dark footer backgrounds, and foundational brand anchoring.
- **Secondary (`#95D5B2`):** Applied to supportive UI elements, icons, interactive hover states, and structural accents.
- **Surface (`#F8F6F0`):** The primary canvas background, creating an inviting, paper-like warmth across alternate sections.
- **Accent (`#E07A5F`):** Reserved exclusively for primary calls-to-action and critical conversion highlights.
- **Text & Support:** High-contrast near-black (`#1A1A1A`) for body readability, softened gray (`#5C5C5C`) for metadata, and `#FFFFFF` for contrast on dark fields.

## Typography

Typography balances confident geometric headings with highly legible, neutral body text. **Outfit** drives the brand's architectural voice with tight line heights and striking proportions, while **Inter** ensures effortless reading across nutritional details, FAQs, and long-scroll narrative blocks. Eyebrow labels utilize uppercase tracked lettering to establish clear hierarchical pacing.

## Layout & Spacing

A **fixed grid** model is utilized, bound to a generous max-content width of 1200px centered on desktop viewports. The layout thrives on deliberate, generous whitespace—sections are punctuated by 80px to 120px of vertical breathing room to emulate the openness of a pristine farm environment.

- **Breakpoints:** Desktop primary at 1440px+, Tablet scaling down to 768px, and Mobile base at 390px.
- **Reflow Rules:** Multi-column grids gracefully collapse into single-column vertical stacks on mobile, prioritizing high-intent actions (subscriptions, cart additions) within thumb reach.

## Elevation & Depth

Depth is conveyed through **ambient, low-opacity shadows paired with tonal layering**. Rather than harsh drop shadows, surfaces rely on soft, diffused shadows tinted subtly with the primary forest green hue to maintain organic cohesion. 

- **Cards & Containers:** Grounded with a soft shadow (`0px 8px 24px rgba(27, 67, 50, 0.06)`) against the warm cream surface.
- **Interactive States:** Elevated surfaces lift slightly on hover via subtle translation and shadow expansion.

## Shapes

The shape language reflects organic growth—friendly, approachable, and softened. We use a **Rounded** philosophy (`rounded` to `rounded-xl`), deliberately avoiding sharp 0px corners except where utilitarian data tables require grid alignment.

- **Primary CTAs:** Pill-shaped for maximum approachability and distinct conversion focus.
- **Cards & Modals:** Generous 12px to 16px corner radii to soften the visual density of product grids.
- **Secondary Elements:** 8px radius for form inputs, secondary buttons, and smaller component containers.

## Components

- **Sticky Navigation:** Anchored at the top with a semi-transparent blur over the warm cream surface. Houses the brand logo on the left, core navigation links in the center, and a utility cluster (phone support, cart icon with badge, and the primary coral subscription pill) on the right.
- **Buttons:** Primary actions use coral pill buttons with bold label typography and a subtle hover-state saturation shift. Secondary actions use outline styles set in the primary forest green.
- **Product Cards:** Display macro photography of microgreens against a light surface, featuring an optional sale badge, clear typographic hierarchy for pricing (strikethrough old price alongside current price), and an inline action trigger.
- **FAQ Accordion:** Clean divider lines with smooth expand/collapse states driven by a rotating sage chevron icon.
- **Footer:** Deep forest green background housing multi-column regional address data (India and UAE), social connectivity links, and compliance copyright text.