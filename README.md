# LEAR Physiotherapy & Rehabilitation Center

Official website for LEAR, a professional physiotherapy, rehabilitation, and personal training center based in Torreón, Coahuila, Mexico.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🌟 Features

- **Modern Design**: Glassmorphism effects, animated gradients, and vibrant brand colors
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Fast Performance**: Static site generation with Astro for lightning-fast page loads
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **[Astro 5.16+](https://astro.build)** - Modern web framework for content-focused websites
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 📁 Project Structure

```text
/
├── public/
│   └── images/              # Static assets (logos, photos, icons)
│       ├── logo.svg         # Main horizontal logo
│       ├── imagotipo.svg    # Badge/icon logo variant
│       ├── servicios/       # Service images
│       ├── panda/           # Team mascot images
│       └── convenios/       # Partner logos
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with header/footer
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Home page
│   │   ├── servicios.astro  # Services page
│   │   ├── equipo.astro     # Team page
│   │   └── sobre-nosotros.astro # About page
│   └── styles/
│       └── global.css       # Global styles with Tailwind v4 @theme
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lear-site.git

# Navigate to project directory
cd lear-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📜 Available Scripts

| Command              | Action                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`        | Install dependencies                                |
| `npm run dev`        | Start development server at `localhost:4321`        |
| `npm run build`      | Build production site to `./dist/`                  |
| `npm run preview`    | Preview production build locally                    |
| `npm run astro`      | Run Astro CLI commands                              |

## 🎨 Design System

The project uses a comprehensive brand color system defined in `src/styles/global.css`:

### Brand Colors

- **Primary**: `#0d4b92` (Dark Blue)
- **Secondary**: `#00b6e5` (Cyan)
- **Accent**: `#00d4aa` (Aqua Green)
- **Accent Warm**: `#ff8c42` (Soft Orange)

### Visual Effects

- Glassmorphism with backdrop blur
- Animated gradient backgrounds
- CSS-only animations (no JS libraries)
- 3D transforms on hover states
- Multi-layer glow effects

See `PALETA-COLORES.md` and `CAMBIOS-VISUALES.md` for complete design documentation (Spanish).

## 📄 Pages

- **`/`** - Home page with hero section, services preview, testimonials, and team CTA
- **`/servicios`** - Detailed services page with "How it Works" section
- **`/equipo`** - Team members with credentials and specializations
- **`/sobre-nosotros`** - About page with company history and values

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com) and hosted on GitHub.

### Deploy to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Visit [vercel.com](https://vercel.com) and sign in with your GitHub account

3. Click **"Add New Project"** and import your GitHub repository

4. Vercel will automatically detect Astro and configure the build settings:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Click **"Deploy"** and wait for the build to complete

6. Your site will be live at `https://your-project-name.vercel.app`

### Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your domain and follow the DNS configuration instructions

## 🔮 Future Features

- [ ] Blog/articles section
- [ ] Contact form with validation
- [ ] Appointment booking system (Calendly/Cal.com integration)
- [ ] Facilities photo gallery
- [ ] Patient portal (login system)

## 📚 Documentation

Additional documentation files (in Spanish):
- `CLAUDE.md` - Development guide for Claude Code
- `PALETA-COLORES.md` - Complete color palette reference
- `CAMBIOS-VISUALES.md` - Visual design transformation history
- `COMO-AGREGAR-LOGO.md` - Logo integration guide

## 🤝 Contributing

This is a private project for LEAR Physiotherapy Center. For inquiries, please contact the team directly.

## 📞 Contact

**LEAR - Centro de Fisioterapia & Rehabilitación Integral**

- **Location:** Av. Juarez 368, Primero de Cobián Centro, 27000 Torreón, Coah.
- **WhatsApp:** [+52 871 106 9004](https://wa.me/528711069004)
- **Hours:**
  - Tue-Fri: 10:00 AM - 1:00 PM, 2:00 PM - 7:00 PM
  - Sat: 10:00 AM - 5:00 PM

## 📝 License

© 2024 LEAR - Centro de Fisioterapia & Rehabilitación Integral. All rights reserved.

---

Built with ❤️ using [Astro](https://astro.build)
