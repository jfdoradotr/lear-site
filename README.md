# LEAR - Centro de Fisioterapia & Rehabilitación Integral

Sitio web oficial de LEAR, centro especializado en fisioterapia, rehabilitación y entrenamiento personalizado.

## 🏗️ Tecnologías

- **Astro** - Framework web moderno y rápido
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - JavaScript tipado

## 📁 Estructura del Proyecto

```text
/
├── public/
│   └── images/          # Imágenes y assets estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de páginas
│   │   └── Layout.astro # Layout principal con header/footer
│   ├── pages/          # Páginas del sitio
│   │   ├── index.astro         # Página de inicio
│   │   ├── servicios.astro     # Página de servicios
│   │   ├── equipo.astro        # Página del equipo
│   │   └── sobre-nosotros.astro # Página sobre nosotros
│   └── styles/
│       └── global.css   # Estilos globales (Tailwind)
└── package.json
```

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando              | Acción                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`        | Instala las dependencias                            |
| `npm run dev`        | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm run build`      | Compila el sitio para producción en `./dist/`       |
| `npm run preview`    | Previsualiza la compilación localmente              |

## 📝 Antes de Comenzar

### Agregar el Logo

Guarda el logo de LEAR en la siguiente ubicación:
```
public/images/logo.png
```

El logo debe estar en formato PNG o SVG para mejor calidad.

## 🚀 Deploy en Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. Sube el proyecto a GitHub
2. Visita [vercel.com](https://vercel.com)
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Astro
5. Haz click en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configuración de Vercel

Vercel detecta automáticamente la configuración de Astro. No se necesita configuración adicional.

**Build Command:** `npm run build`
**Output Directory:** `dist`

## 📄 Páginas Actuales

- `/` - Página de inicio
- `/servicios` - Servicios ofrecidos
- `/equipo` - Equipo profesional
- `/sobre-nosotros` - Información del centro

## 🔜 Funcionalidades Futuras

- Sección de blog/artículos
- Formulario de contacto
- Sistema de citas (integración con Calendly/Cal.com)
- Galería de instalaciones

## 🛠️ Desarrollo

Para comenzar a desarrollar:

```bash
# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`
