# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds page routes (`index.astro`, `servicios.astro`, `equipo.astro`, `sobre-nosotros.astro`, `politica-citas.astro`).
- `src/layouts/Layout.astro` defines the shared shell (header, footer, mobile menu script).
- `src/components/` contains reusable UI blocks (e.g., `FeaturedTestimonial.astro`).
- `src/data/` stores structured content (`testimonials.ts`, `holidayBannerConfig.ts`).
- `src/styles/global.css` defines Tailwind v4 theme tokens and global styles.
- `public/images/` contains static assets (logos, service images, partners, mascot).
- `dist/` is the build output (generated).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server at `http://localhost:4321`.
- `npm run build` generates the production site into `dist/`.
- `npm run preview` serves the production build locally.
- `npm run astro -- <cmd>` runs Astro CLI subcommands.

## Coding Style & Naming Conventions
- Use 2-space indentation in `.astro` and `.ts` files, matching existing formatting.
- Keep content in Spanish and maintain a professional, medical tone.
- Prefer Tailwind utility classes and the brand tokens defined in `src/styles/global.css` (e.g., `bg-lear-primary`).
- Name components in PascalCase and place shared UI in `src/components/`.

## Testing Guidelines
- No automated test runner is configured. Validate changes with:
- `npm run dev` for interactive checks.
- `npm run build` and `npm run preview` as a production smoke test.

## Commit & Pull Request Guidelines
- Commits follow concise, imperative subjects (e.g., “Update README”, “Add the bank logo images”).
- PRs should include a clear summary, linked issue (if any), and before/after screenshots for UI changes.

## Documentation & Assets
- Read `CLAUDE.md` for architectural and design-system specifics.
- For logos and new imagery, follow `COMO-AGREGAR-LOGO.md` and prefer SVG assets.
