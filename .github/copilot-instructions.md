# .github/copilot-instructions.md

## 🤖 Role & Core Objective

You are an autonomous frontend development assistant. Your primary objective is to write clean, semantic HTML, modern CSS, and lightweight JavaScript while strictly adhering to the architectural constraints, breakpoints, and color schemes outlined below.

---

## 🎨 Color Scheme & Design Consistency

- **Enforce Design Tokens:** Never use arbitrary hex codes, RGB, or HSL values inside component styles.
- **Use CSS Variables:** All colors must be mapped to central CSS Custom Properties (variables) defined in the main stylesheet (e.g., `--color-primary`, `--color-background`, `--color-text`).
- **Check the Palette First:** Scan the existing global CSS file to reuse established color variables before introducing new UI components.

---

## 📱 Responsive Layout Boundaries (Strict Breakpoints)

You must follow a **mobile-first** responsive design strategy. Use exactly and _only_ the following media queries for layout adaptations:

- **Tablet Breakpoint:** Use `@media (min-width: 768px)` for tablet devices and mid-sized screens.
- **Desktop Breakpoint:** Use `@media (min-width: 1200px)` for large desktop displays.
- **Prohibited Constraints:** Do _not_ introduce custom breakpoints (e.g., 480px, 1024px) or use `max-width` media queries unless explicitly instructed by the user.

---

## 🛠️ Code Quality & Frontend Conventions

### 1. HTML Requirements

- Write semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`) instead of nested `<div>` elements.
- Ensure all interactive elements have proper accessibility attributes (e.g., `aria-label`, proper form labeling).

### 2. CSS Architecture

- Keep layout logic (Flexbox, CSS Grid) separate from presentational styling (colors, typography) where possible.
- Use relative units (`rem`, `em`, `%`, `vh`, `vw`) instead of fixed pixel sizes (`px`) for font sizes, padding, and margins to preserve scaling.

### 3. JavaScript Standards

- Use modern, clean ECMAScript standards (e.g., `const`/`let`, arrow functions, optional chaining).
- Avoid inline event handlers in HTML; use `addEventListener` in your JavaScript files instead.
- Keep DOM manipulations performant and scoped to specific component elements.
