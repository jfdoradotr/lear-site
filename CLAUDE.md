# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LEAR is a professional physiotherapy and rehabilitation center website built with Astro 5, Tailwind CSS 4, and TypeScript. The site features a modern, vibrant design with glassmorphism effects, animated gradients, and a comprehensive brand color system.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs at localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Architecture & Structure

### Framework Configuration
- **Astro 5.16+** with strict TypeScript configuration
- **Tailwind CSS 4** integrated via Vite plugin (configured in `astro.config.mjs`)
- All pages are static `.astro` files with no client-side JavaScript framework
- Mobile menu toggle is the only client-side script (vanilla JS in Layout.astro:220-227)

### Page Structure
All pages use the same layout pattern:
1. Import `Layout.astro` component
2. Pass `title` and optional `description` props
3. Content is inserted into the `<slot />` in the layout

Pages are located in `src/pages/`:
- `index.astro` - Home page with hero section, services preview, team CTA
- `servicios.astro` - Services page
- `equipo.astro` - Team page
- `sobre-nosotros.astro` - About page

### Layout System
`src/layouts/Layout.astro` contains the complete page structure:
- **Header**: Sticky navigation with glassmorphism effect, desktop/mobile responsive menu
- **Main**: Slot for page content
- **Footer**: Three-column layout with company info, quick links, and contact details (including WhatsApp CTA)

No component directory exists - all UI elements are built inline within pages/layouts using Tailwind utilities.

## Brand Design System

### Color Palette
The brand uses a comprehensive color system defined in `src/styles/global.css` using Tailwind v4's `@theme` directive:

**Primary Colors** (from logo):
- `lear-primary`: #0d4b92 (dark blue)
- `lear-secondary`: #00b6e5 (cyan)

**Accent Colors** (complementary color theory):
- `lear-accent`: #00d4aa (aqua green - trust, health)
- `lear-accent-warm`: #ff8c42 (soft orange - energy)

**Background Tints**:
- `lear-bg-primary`: #e3f0ff (blue tint)
- `lear-bg-secondary`: #d9f3fc (cyan tint)
- `lear-bg-accent`: #d6f5ed (aqua tint)

**Gray Scale**: `lear-gray-[50-900]` - slate grays with blue tint for brand cohesion

### Visual Effects Applied
The site uses modern CSS techniques for depth and engagement:
- **Glassmorphism**: `backdrop-blur-xl` with semi-transparent backgrounds
- **Gradient overlays**: Multi-color gradients (primary → secondary → accent)
- **Animated pulse**: On badges, background circles using CSS animations
- **3D transforms**: Hover states with `scale-110`, `rotate-1`, `translate-y-[-4px]`
- **Glow effects**: Multi-layer shadows with colored blur
- **Text gradients**: Using `bg-gradient-to-r` with `bg-clip-text text-transparent`

See `CAMBIOS-VISUALES.md` for complete visual design documentation.

## Asset Management

### Images
All static assets are in `public/images/`:
- `logo.svg` - Main horizontal logo (used in header)
- `imagotipo.svg` - Badge/icon version (used in footer and favicon)
- `servicios/` - Service-specific images
- `panda/` - Team member images
- `convenios/` - Partner logos

When adding new images, use SVG format when possible for best quality.

### Logo Implementation
The site uses two logo variants:
1. Full logo (`logo.svg`) in header - 64px height (class: `h-16`)
2. Imagotype (`imagotipo.svg`) in footer and as favicon - square badge format

## Styling Patterns

### Using Brand Colors
Always reference brand colors through Tailwind utilities:
```astro
<!-- Background -->
<div class="bg-lear-primary">

<!-- Text -->
<p class="text-lear-secondary">

<!-- Gradients -->
<div class="bg-gradient-to-br from-lear-primary to-lear-secondary">

<!-- With opacity -->
<div class="bg-lear-accent/10">
```

### Common UI Patterns

**Buttons** (from index.astro:56-75):
- Primary: White bg, hover reveals gradient overlay, scale-110 transform
- Secondary: Glassmorphism with backdrop-blur, border, transforms to solid white on hover

**Cards** (service cards pattern):
- White bg with shadow, border-2 border-transparent
- Hover: colored border gradient, translate-y-[-4px], rotate-1, colored glow shadow
- Icon containers with gradient backgrounds matching service color

**Section Headers**:
- Badge with pulsing dot indicator
- Large title (text-4xl to text-6xl) with gradient on key words
- Subtitle with lighter weight and color

## Key Implementation Details

### Responsive Design
- Mobile-first Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Mobile menu hidden by default, toggled via button (Layout.astro:57-85)
- Desktop navigation uses glassmorphism hover effects
- Effects simplified on mobile (fewer blur effects for performance)

### Performance Considerations
- No heavy images (primarily SVG and optimized assets)
- CSS-only animations (no JS animation libraries)
- Astro's static generation for fast page loads
- Build time: ~500ms

### Contact Integration
WhatsApp link in footer (Layout.astro:189-206):
- Number: +52 871 106 9004
- Formatted as clickable button with WhatsApp brand color (#25D366)
- Mobile-optimized with `wa.me` link

## Content Guidelines

### Spanish Language
All content is in Spanish. Maintain consistent tone:
- Formal but approachable
- Professional medical/health terminology
- Direct and benefit-focused copy

### Future Features
Documented in README.md:
- Blog/articles section
- Contact form
- Appointment system (Calendly/Cal.com integration)
- Facilities gallery

## Additional Documentation

- `PALETA-COLORES.md` - Complete color palette reference with usage examples
- `CAMBIOS-VISUALES.md` - Detailed visual transformation documentation
- `COMO-AGREGAR-LOGO.md` - Logo integration guide (primarily for initial setup)
- `README.md` - General project info and deployment instructions
