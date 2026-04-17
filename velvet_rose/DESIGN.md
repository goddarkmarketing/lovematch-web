# Design System: Romantic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Ethereal Editorial."** 

We are moving away from the "utility-first" look of standard dating apps and toward a high-end lifestyle publication feel. This system prioritizes romance through soft, organic depth and breathing room. We reject the rigid, boxy constraints of traditional web grids in favor of **intentional asymmetry** and **overlapping elements** that mimic the fluidity of human connection. By utilizing glassmorphism and tonal layering, we create a digital environment that feels like a premium sanctuary—intimate, trustworthy, and sophisticated.

---

## 2. Colors: Tonal Romance
Our palette is rooted in the psychology of affection. We avoid harsh contrasts to maintain a "soft-focus" aesthetic.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. 
Structure must be defined through:
- **Background Shifts:** Placing a `surface-container-low` section against a `surface` background.
- **Negative Space:** Using the spacing scale to create clear mental models of grouping.
- **Tonal Transitions:** Subtle shifts in hue to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of frosted glass.
- **Surface (Base):** The foundational canvas (`#fff8f8`).
- **Surface-Container-Low:** Used for large secondary content blocks.
- **Surface-Container-High/Highest:** Reserved for interactive cards and floating modals to create a "lifted" effect.
- **Nesting:** An inner container must always be at least one tier higher or lower than its parent to maintain legibility without borders.

### The "Glass & Gradient" Rule
To achieve a premium "soul," use the **Pink-Purple Gradient** (`primary` to `secondary`) for primary CTAs and hero backgrounds. For floating elements over imagery, use **Glassmorphism**:
- **Fill:** `surface` at 60-80% opacity.
- **Effect:** Backdrop-blur (12px - 20px).
- **Edge:** A "Ghost Border" (see Elevation & Depth).

---

## 3. Typography: Modern Thai Sophistication
We use a dual-font strategy to balance editorial authority with approachable warmth.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "editorial" anchors. Use `display-lg` and `headline-md` with generous tracking to create a sense of luxury. The modern sans-serif nature feels current, while the scale commands attention.
*   **Body & Titles (Be Vietnam Pro):** Chosen for its exceptional legibility in both Thai and Latin scripts. 
    *   **Titles (`title-lg`):** Use for profile names and section headers.
    *   **Body (`body-md`):** Used for bio descriptions and messaging. The high x-height ensures readability even at smaller scales.
*   **Labels (`label-md`):** Use `tertiary` (Pastel Gold) for labels to denote "Premium" or "Verified" status, adding a touch of prestige.

---

## 4. Elevation & Depth
In this system, depth is a feeling, not a shadow.

*   **Tonal Layering:** Avoid shadows for static components. A `surface-container-lowest` card on a `surface-container-low` section provides a soft, natural lift.
*   **Ambient Shadows:** For floating action buttons or elevated profile cards, use "Ambient Shadows":
    *   **Blur:** 30px - 50px.
    *   **Opacity:** 4% - 8%.
    *   **Color:** Use a tinted shadow (`on-surface` at low alpha) rather than pure black to mimic natural light.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use semi-transparent `surface` colors with backdrop-blur to allow background colors to "bleed" through, ensuring the UI feels integrated into the romantic atmosphere.

---

## 5. Components

### Elegant Buttons
*   **Primary:** Uses the Pink-Purple Gradient (`primary` to `secondary`) with `on-primary` text. Shape: `full` (pill-shaped).
*   **Secondary:** `surface-container-high` background with `primary` text. No border.
*   **Tertiary:** Transparent background with `primary` text and a `title-sm` weight.

### Premium Profile Cards
*   **Structure:** Forbidden use of divider lines. Use `md` (1.5rem) or `lg` (2rem) corner radius.
*   **Status Indicators:** Online status uses `secondary` (Purple) with a soft outer glow of the same color, rather than a standard green dot.
*   **Trust Badges:** Soft Blue or Pastel Gold (`tertiary`) chips with `label-sm` typography, floating in the top-right corner using glassmorphism.

### Inputs & Fields
*   **Text Inputs:** Use `surface-container-low` as the field fill. Transition to `outline` (Ghost Border) only on focus.
*   **Checkboxes/Radios:** Softly rounded (`sm`). Use `primary` for selected states.

### Lists & Navigation
*   **No Dividers:** Separate list items using `body-lg` spacing or subtle `surface-container` shifts.
*   **Floating Navigation:** The bottom nav bar should be a glassmorphic element floating 1rem from the bottom edge, using `xl` (3rem) corner radius.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Offset images and text blocks to create a dynamic, editorial flow.
*   **Embrace White Space:** If you think there is enough space, add 20% more. Premium feels "expensive" because it isn't crowded.
*   **Prioritize Hierarchy:** Use the `display-lg` scale for key emotional hooks (e.g., "Find your soulmate").

### Don’t:
*   **Don't Use Pure Black:** Use `on-background` or `on-surface` for text to keep the interface soft.
*   **Don't Use Hard Borders:** Avoid the 1px solid line at all costs. It breaks the "Ethereal" immersion.
*   **Don't Use Standard Grids:** Avoid perfectly symmetrical 2x2 or 3x3 grids for profiles. Vary card sizes or use slight vertical offsets to keep the eye moving.
*   **Don't Over-Elevate:** If everything has a shadow, nothing is important. Use tonal layering as the default.