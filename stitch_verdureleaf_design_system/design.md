# VerdureLeaf design system (Stitch DESIGN.md)

Import this file into your [Google Stitch](https://stitch.withgoogle.com/) project so new screens follow the same tokens. Values match [../brand-config.md](../brand-config.md).

## Product context

- **Product:** D2C e-commerce website for fresh microgreens (India + UAE).
- **Reference layout:** Long-scroll marketing home like a premium wellness food brand — hero, about, products, FAQ, footer (not a mobile app).
- **Platform:** Desktop web first (1440px); generate mobile web (390px) in a **separate Stitch thread** if needed.

## Brand

- **Name:** VerdureLeaf
- **Tagline:** Fresh Greens. Daily Wellness.
- **Tone:** Fresh, warm, trustworthy, sustainable, premium-but-accessible.
- **Primary CTA:** Start Subscription (coral pill button)
- **Secondary CTA:** Shop once (outline green)

## Colors

| Token | Hex | Usage |
|-------|-----|--------|
| primary | `#1B4332` | Header/footer backgrounds, headings on light |
| secondary | `#95D5B2` | Accents, icons, hover links |
| surface | `#F8F6F0` | Page background, alternate sections |
| text-primary | `#1A1A1A` | Body on light |
| text-secondary | `#5C5C5C` | Captions, meta |
| accent | `#E07A5F` | Primary buttons, highlights |
| sale | `#C1121F` | Sale badges |
| white | `#FFFFFF` | Text on dark green |

## Typography

- **Headings:** Modern geometric sans (Outfit / DM Sans style), bold, tight line-height.
- **Body:** Clean sans (Inter style), 16px, comfortable line spacing.
- **Eyebrow labels:** 12px uppercase, letter-spaced, sage or secondary green.

Scale (desktop): H1 ~56px hero, H2 ~40px section titles, H3 ~24px cards, body 16px.

## Spacing and layout

- Max content width ~1200px centered; generous whitespace between sections (80–120px).
- Cards: 8–16px corner radius, soft shadow.
- Buttons: pill shape for primary CTAs; 8px radius for secondary.

## Components

- **Sticky top navigation:** Logo left; links Home, About Us, Products, Blogs, Recipes, Careers, Contact; phone number + cart icon + coral “Start Subscription” pill right.
- **Product card:** Image, title, optional “Sale!” badge, strikethrough old price + new price, “Add to cart” button.
- **FAQ:** Accordion rows with chevron.
- **Footer:** Dark green; headline + India and UAE address columns; social icons; copyright.

## Imagery

Macro microgreens, harvest trays, salads — natural light, not clinical lab photos.

## Do not

Copy Greenutrizy logos or exact copy. Match category and section flow only.