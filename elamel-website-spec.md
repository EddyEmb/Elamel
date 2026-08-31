# Elamel Family-Friendly Multipage Website Technical Specification

## Overview

This document defines the full technical specification for the Elamel multipage, family-friendly website, based on the provided "Family-Friendly Multipage Website Specification Guidelines" and Elamel brand logo assets.[file:1][file:2][file:3]
The goal is to enable direct implementation (e.g., with Next.js/React) while preserving accessibility, performance, and family-safe content requirements.[file:1]

## Brand and Identity

- **Brand name:** `elamel` (lowercase in logotype, case-flexible in running text).
- **Subbrands:** `Elamel Colors` (ceramic/colour kits and creative products), `Elamel Goodies` (cakes, cookies, and edible treats), and a broader `Moments & Souvenirs` offering for couples/family experiences.[file:1]
- **Logo assets:**
  - Symbol-only vector logo (`logo-2.svg`) for scalable use in headers, icons, and favicons.[file:3]
  - Logo-with-text raster image (`Logowith-Text-3.jpg`) for high-visibility brand placements (hero, about page, promotional blocks).[file:2]
- **Logo usage:**
  - Use the logo-with-text for header, main footer, About page hero, and major promotional sections.[file:2]
  - Use the symbol-only SVG for favicon, small badges, mobile nav icon, and subtle brand markers in cards.[file:3]
  - Logo must always link to the home page when used in site chrome.[file:1]

## Audience and Tone

- Primary audience: families, couples, and children accompanied by adults, seeking friendly products, treats, and shared memories.[file:1]
- Tone: welcoming, safe, inclusive, and respectful; avoid any imagery or wording that could be perceived as violent, sexualized, or discriminatory.[file:1]
- Copy style:
  - Use plain, positive language; avoid jargon and overly complex sentences.[file:1]
  - Keep microcopy encouraging and specific (e.g., "Thank you! Your family treat is on the way.").[file:1]
  - Treat both adults and children as capable participants; avoid patronizing language.[file:1]

## Information Architecture

The site must support "three-click" access: any key content is reachable within three clicks from the home page.[file:1]

### Global Navigation

- **Main navigation (desktop):** `Home`, `Elamel Colors`, `Elamel Goodies`, `Moments & Souvenirs`, `About Elamel`, `Contact`.[file:1]
- **Utility navigation:**
  - Search (icon + accessible label).  
  - Language selector (if multilingual).
  - Links to `Privacy`, `Terms`, `Accessibility`, and optionally `Sitemap` in footer.[file:1]
- Navigation must be consistent in position, appearance, and behaviour across all pages.[file:1]

### Page List and Canonical URLs

- Home: `/`
- Elamel Colors (ceramic/colour kits): `/colors`
- Elamel Goodies (cakes and cookies): `/goodies`
- Moments & Souvenirs (stories and personalised items): `/moments-souvenirs`
- About Elamel: `/about`
- Contact & Orders: `/contact`
- Search results: `/search`
- Sitemap: `/sitemap`
- Privacy: `/privacy`
- Terms of Use: `/terms`
- Accessibility statement: `/accessibility`

All pages must appear in the sitemap and be discoverable via internal search.[file:1]

## Layout and Page Structure

Each page must follow a predictable layout to prevent users from feeling overwhelmed or lost.[file:1]

### Global Layout Structure

- `header`: logo, main navigation, utility links.[file:1]
- `main`: page-specific content, starting with an H1 title.[file:1]
- `footer`: contact details, social links (if any), legal links, and a short brand statement.[file:1]

### General Rules

- No horizontal scrolling on standard desktop resolutions; minimise vertical scrolling for key information on Home and category pages.[file:1]
- Use whitespace and visual grouping (cards, sections) to reduce clutter and cognitive load.[file:1]
- Provide breadcrumbs on category and detail pages (e.g., `Home > Elamel Goodies > Family Cakes > [Cake Name]`).[file:1]

## Home Page Specification (`/`)

### Purpose

Introduce the Elamel brand, highlight main categories (Colors, Goodies, Moments & Souvenirs), and guide users quickly into relevant sections.[file:1]

### Content Blocks

1. **Hero Section**
   - Prominent logo-with-text centered or left-aligned.[file:2]
   - Short tagline expressing the brand promise (e.g., "Colors, treats, and moments for every family").
   - Primary CTA buttons: `Explore Elamel Colors`, `Explore Elamel Goodies`.
   - Secondary link: `Discover Moments & Souvenirs`.

2. **Category Highlights**
   - Three equal-width panels/cards for `Elamel Colors`, `Elamel Goodies`, `Moments & Souvenirs` with image, short description, and clear button.[file:1]

3. **Why Families Love Elamel**
   - 3–4 bullet points highlighting safety, quality, family moments, and inclusive atmosphere.[file:1]

4. **Featured Items / Stories (Optional)**
   - Carousel or grid highlighting a small set of items or stories from each main section.
   - If carousel is used, provide visible controls and pause/stop functionality.[file:1]

## Elamel Colors Page Specification (`/colors`)

This page adapts the Ceramic Kits guidelines to Elamel’s colour and ceramic products.[file:1]

### Information Architecture

- Categories: `Tableware Colors`, `Decorative Pieces`, `Gift Sets`, `Kids & Family Kits` (exact labels can be refined).
- Include filters or tabs to switch between categories if product volume is high.

### Product Listing

- Use card-based grid layout.
- Each card shows:
  - Product image with descriptive alt text (type, colour, intended use).[file:1]
  - Product name.
  - Short description (1–2 sentences).
  - Key attribute tags (e.g., `Gift Set`, `Family Kit`).
  - Price or "from" price.
  - Link/button: `View Kit Details`.

### Product Detail View

Each detail view (page or modal) must include:[file:1]

- Large, well-lit product image(s) with alt text describing type, colour, and usage.
- Bullet list of dimensions, materials, care instructions.
- Safety and fragility information, including recommended age ranges around children.[file:1]
- Optional notes on how the kit fits family moments (e.g., "Perfect for weekend crafts with kids").

## Elamel Goodies Page Specification (`/goodies`)

This page showcases cakes, cookies, and treats with an inviting, honest presentation.[file:1]

### Information Architecture

- Categories: `Family Cakes`, `Cookies & Biscuits`, `Occasion Treats`, `Kids-Friendly Options`.
- Filters for allergens/diet codes (e.g., `contains nuts`, `gluten-free`, `vegetarian`).[file:1]

### Product Listing

Each Goodies card includes:[file:1]

- Warm, bright food image without over-stylised or misleading editing.[file:1]
- Item name.
- Flavor profile (e.g., "Chocolate sponge with vanilla cream").
- Portion size and serving suggestions (e.g., "Serves 6–8 family members").[file:1]
- Price.
- Allergen and diet information displayed close to the item (e.g., "contains nuts", "gluten-free").[file:1]

### Product Detail View

- Expanded description of flavor and occasion.
- Clear ingredients list and allergen warnings.[file:1]
- Optional notes on storage and serving temperature.
- Subtle hover/interaction effects only; avoid autoplay videos or rapid motion.[file:1]

## Moments & Souvenirs Page Specification (`/moments-souvenirs`)

This page focuses on emotional storytelling and personalised items for couples and families.[file:1]

### Information Architecture

- Thematic sections: `Anniversary Moments`, `Family Celebrations`, `Holiday Souvenirs`.
- Each section contains short narrative blocks and associated items or packages.

### Content Requirements

- Imagery: diverse couples and families in modest, everyday joyful settings (sharing dessert, arranging ceramics, posing with souvenirs).[file:1]
- Copy: short stories about how Elamel products support shared memories.

### Personalised Items

- Items such as personalised ceramics or custom cookie messages.
- Simple personalisation forms with fields like:
  - `Name or Family Name`.
  - `Date or Occasion`.
  - `Short Message` (length-limited).
- Clear step-by-step instructions explaining the process, confirmation messages, and expected delivery timelines.[file:1]

## About Elamel Page Specification (`/about`)

### Purpose

Present the brand story, values, and commitment to families and safety.[file:1]

### Sections

- `Our Story`: short narrative on how Elamel began (focus on families, colours, and treats).
- `Our Values`: bullet points (e.g., safety, quality, inclusivity, joy).
- `Quality & Safety`: description of processes for ingredient sourcing, ceramic handling, and child-friendly design.[file:1]
- `Community & Families`: mention involvement with community events or family programmes, if applicable.

### Visuals

- Prominent logo-with-text in hero area.[file:2]
- Imagery of workshop, team, or family-focused environments, always modest and inclusive.[file:1]

## Contact & Orders Page Specification (`/contact`)

### Purpose

Provide clear channels for contact, inquiries, and simple order/pre-order requests.[file:1]

### Contact Options

- Contact form.
- Phone number.
- Email address.
- Optional WhatsApp or messaging link.

### Form Design

- Example fields:
  - `Full Name` (required).
  - `Email` (required, format validation).
  - `Phone` (optional, numeric validation).
  - `I’m interested in` (select: `Elamel Colors`, `Elamel Goodies`, `Moments & Souvenirs`).
  - `Message` (textarea, with character count).
- Accessible labels for all fields; use semantic `<label>` and ARIA where needed.[file:1]
- Inline validation with clear, helpful messages (e.g., "Please add your email so we can reply.").[file:1]

### Feedback

- On success: friendly confirmation page or message (e.g., "Thank you! Your request was sent. We’ll contact you soon about your Elamel treat.").[file:1]
- On error: specific explanation and remediation steps; avoid generic "Error" messages.[file:1]

## Search, Sitemap, and Orientation

### Search (`/search`)

- Accessible search field in header or overlay.
- Results page listing matching products and content with category labels and filters.[file:1]

### Breadcrumbs

- Implement breadcrumbs on category and detail pages (e.g., `Home > Elamel Colors > Kids & Family Kits > [Kit Name]`).[file:1]

### Sitemap (`/sitemap`)

- Hierarchical list of all pages, including legal and accessibility pages, to support quick overview and crawlers.[file:1]

## Visual Design and Colour System

### Backgrounds and Surfaces

- Use soft, neutral backgrounds (off-white or light pastel) for main surfaces to evoke lightness and calm.[file:1]
- Reserve stronger colours for accents (buttons, tags) while avoiding aggressive combinations that cause visual fatigue.[file:1]

### Colour Palette

- Base palette derived from Elamel brand colours ("Elamel colors"), supplemented with neutral greys for text and separators.[file:1]
- Maintain consistency across sections: each category can have a signature accent, but the core palette must remain unified.[file:1]

### Contrast and Accessibility

- Ensure text/background contrast ratios of at least 4.5:1 for body text and 3:1 for large headings.[file:1]

## Typography and Readability

- Use one or two simple fonts, preferably sans serif (e.g., Arial, Verdana, or similar) for body text.[file:1]
- Heading hierarchy: H1 for page titles, H2 for main sections, H3/H4 for subsections, mapped to semantic HTML.[file:1]
- Body text size equivalent to 12–14pt or larger; line height ~1.5.[file:1]
- Keep paragraphs short; use lists and headings to break content into digestible chunks.[file:1]

## Accessibility and Ergonomic UX

The site must follow WCAG-based accessibility principles (POUR: Perceivable, Operable, Understandable, Robust).[file:1]

### Keyboard and Focus

- All interactive elements must be reachable via keyboard (Tab/Shift+Tab).[file:1]
- Provide visible focus indicators (e.g., outline or underline) for links and controls.[file:1]

### Screen Reader Support

- Use semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).[file:1]
- Add alt text to all meaningful images; mark decorative images appropriately so screen readers can skip them.[file:1]
- Provide text alternatives or captions for any non-text media.[file:1]

### Ergonomic Layout

- Maintain generous spacing; ensure touch targets are large enough on mobile to avoid mis-taps.[file:1]
- Avoid cluttered page layouts; limit the number of interactive elements per screen to reduce fatigue.[file:1]

## Navigation and Interaction Patterns

- Keep navigation in the same location on all pages (top for desktop, top or drawer for mobile).[file:1]
- Use descriptive, action-oriented labels (e.g., "Browse Elamel Colors" rather than "Products").[file:1]
- For multi-step flows (personalisation, long contact forms), include `Previous`, `Next`, and `Back to Home` where appropriate.[file:1]

## Animations and Transitions

- Use subtle transitions (fade, slide, scale) for page changes, hover states, and feedback actions.[file:1]
- Avoid flashing or rapid motion; do not use extreme parallax or autoplay sequences without controls.[file:1]
- Provide controls to pause/stop any auto-playing carousels or animated sections.[file:1]
- Ensure animations do not interfere with keyboard navigation or screen readers; dynamic updates should be announced via ARIA live regions if necessary.[file:1]

## Content Style and Family Safety

- Review all text and imagery to confirm they are family-friendly and age-appropriate.[file:1]
- Keep human imagery modest and culturally respectful; avoid adult-only romantic content.[file:1]
- Clearly label allergens in Goodies and handling/fragility instructions in Colors and Souvenirs.[file:1]

## Interaction Feedback and Microcopy

- Confirm key actions (form submissions, newsletter sign-ups, orders) with friendly, specific messages.[file:1]
- Provide helpful error messages explaining what went wrong and how to fix it.[file:1]
- Avoid dark patterns, manipulative wording, or guilt-based messaging.[file:1]

## Performance and Technical Considerations

- Optimise images (responsive sizes, compression) and minimise scripts/styles to ensure fast loading on mobile and desktop.[file:1]
- Use responsive layouts (CSS Grid/Flexbox) for mobile-first design; ensure content remains readable and tappable on small screens.[file:1]
- Do not require external apps or plug-ins for core features; everything must function via modern browsers only.[file:1]

## Privacy, Safety, and Trust

- Provide clear privacy policy and terms pages describing data collection, storage, and protection practices.[file:1]
- Avoid dark patterns such as hidden opt-ins or confusing unsubscribe links; consent must be explicit and revocable.[file:1]
- Display contact information prominently (footer and Contact page) and link to any trusted external services or community organisations where appropriate.[file:1]

## Technical Stack Guidance (Non-binding)

Although the specification is technology-agnostic, recommended practices include:

- Use semantic HTML5, CSS, and JavaScript with component-based architecture (e.g., React / Next.js).
- Implement a design system or component library for buttons, cards, forms, alerts, and navigation elements to ensure consistency and accessibility.[file:1]
- Integrate basic SEO (semantic titles, meta descriptions, open graph data) while preserving accessibility priorities.[file:1]

## Specification Checklist

Before sign-off, verify:

- Information architecture supports three-click access to key content and includes clear headings, site map, and search.[file:1]
- Visual design uses light, harmonious colours, simple typography, sufficient contrast, and family-friendly imagery.[file:1]
- Navigation and interactions are consistent, keyboard-accessible, and provide clear focus indicators and feedback.[file:1]
- Animations and transitions are smooth, subtle, controllable, and do not hinder accessibility or cause discomfort.[file:1]
- Each main section (`Elamel Colors`, `Elamel Goodies`, `Moments & Souvenirs`) follows the content and safety guidelines defined above.[file:1]
- Performance, privacy, and trust considerations are explicitly addressed in technical and legal sections of the site.[file:1]

By following this specification, the Elamel website will provide an ergonomic, inclusive, and emotionally engaging experience for families, couples, and children while remaining implementation-ready for modern web frameworks.[file:1]
