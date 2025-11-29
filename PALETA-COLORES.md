# Paleta de Colores LEAR

Esta es la paleta de colores oficial del sitio web de LEAR, basada en el logo corporativo y teoría del color.

## 🎨 Colores Principales

### Azul Primario (Principal)
- **Base**: `#0D4B92` - Color dominante del logo
- **Oscuro**: `#083863` - Para fondos oscuros y footers
- **Claro**: `#1560B3` - Para hover effects
- **Muy Claro**: `#3D7FC4` - Para variaciones

**Uso en CSS**: `var(--color-lear-primary)`

### Azul Secundario (Cian)
- **Base**: `#00B6E5` - Color secundario del logo
- **Oscuro**: `#0091B8` - Para variaciones
- **Claro**: `#33C7ED` - Para highlights y acentos
- **Muy Claro**: `#66D4F1` - Para texto sobre fondos oscuros

**Uso en CSS**: `var(--color-lear-secondary)`

## ✨ Colores de Acento (Teoría del Color)

### Verde Agua (Acento Principal)
- **Color**: `#00D4AA` - Representa confianza, salud y frescura
- **Uso**: CTAs secundarios, badges de éxito, elementos de énfasis

**Teoría**: Color análogo-complementario que armoniza con el azul primario

### Naranja Suave (Acento Cálido)
- **Color**: `#FF8C42` - Representa energía, vitalidad y acción
- **Uso**: Llamadas a la acción importantes, warnings

**Teoría**: Color complementario split que crea contraste dinámico

## 🎨 Backgrounds con Tintes de Marca

### Fondos Sutiles (Para secciones alternas)
- **Azul Primario**: `#F0F6FC` - Fondos con tinte azul muy sutil
- **Cyan Secundario**: `#E6F7FD` - Fondos con tinte cyan
- **Verde Acento**: `#E6FAF5` - Fondos con tinte verde agua

**Uso**: Secciones alternas, cards, elementos destacados

## 🔲 Colores de Soporte

### Escala de Grises (con tinte azul)
- **Gray 50**: `#F8FAFC` - Fondos muy claros
- **Gray 100**: `#F1F5F9` - Fondos de secciones alternativas
- **Gray 200**: `#E2E8F0` - Bordes sutiles
- **Gray 300**: `#CBD5E1` - Bordes medianos
- **Gray 400**: `#94A3B8` - Texto deshabilitado
- **Gray 500**: `#64748B` - Texto placeholder
- **Gray 600**: `#475569` - Texto secundario
- **Gray 700**: `#334155` - Texto principal
- **Gray 800**: `#1E293B` - Texto oscuro
- **Gray 900**: `#0F172A` - Títulos y énfasis máximo

**Uso en CSS**: `var(--color-lear-gray-[número])`

**Nota:** Estos grises tienen un tinte azul sutil para mantener coherencia con la marca

## Uso en Tailwind CSS

### Con Variables CSS (Recomendado)
```html
<!-- Fondo primario -->
<div class="bg-[--color-lear-primary]">

<!-- Texto primario -->
<p class="text-[--color-lear-primary]">

<!-- Fondo primario con opacidad -->
<div class="bg-[--color-lear-primary]/10">

<!-- Gradiente -->
<div class="bg-gradient-to-br from-[--color-lear-primary] to-[--color-lear-secondary]">
</div>
```

## Aplicaciones por Componente

### Headers de Página
- Gradiente: `from-[--color-lear-primary]` a `to-[--color-lear-secondary]`
- Texto: Blanco con opacidad 90% para subtítulos

### Botones Primarios
- Fondo: `bg-[--color-lear-primary]`
- Hover: `hover:bg-[--color-lear-primary-light]`
- Texto: Blanco

### Enlaces
- Normal: `text-[--color-lear-primary]`
- Hover: `hover:text-[--color-lear-primary-light]`

### Tarjetas/Cards
- Fondo: Blanco o `bg-[--color-lear-gray-50]`
- Bordes: `border-[--color-lear-gray-200]`
- Iconos: `text-[--color-lear-primary]` o `text-[--color-lear-secondary]`

### Footer
- Fondo: `bg-[--color-lear-primary-dark]`
- Enlaces hover: `hover:text-[--color-lear-secondary-light]`

## Contraste y Accesibilidad

Los colores han sido seleccionados para cumplir con los estándares WCAG:

- Texto blanco sobre `#0D4B92`: ✅ AA/AAA
- Texto blanco sobre `#00B6E5`: ✅ AA
- `#0D4B92` sobre blanco: ✅ AA/AAA
- `#374151` (gray-700) sobre blanco: ✅ AA/AAA

## Actualizar Colores

Para modificar la paleta de colores del sitio, edita el archivo:
```
src/styles/global.css
```

Busca la sección `@theme` y modifica los valores hexadecimales según sea necesario.
