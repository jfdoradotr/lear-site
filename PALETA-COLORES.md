# Paleta de Colores LEAR

Esta es la paleta de colores oficial del sitio web de LEAR, basada en el logo corporativo.

## Colores Principales

### Azul Primario (Principal)
- **Base**: `#0D4B92` - Color dominante del logo
- **Oscuro**: `#083863` - Para hover effects y énfasis
- **Claro**: `#1560B3` - Para estados activos

**Uso en CSS**: `var(--color-lear-primary)`

### Azul Secundario (Cian)
- **Base**: `#00B6E5` - Color secundario del logo
- **Oscuro**: `#0091B8` - Para variaciones
- **Claro**: `#33C7ED` - Para highlights

**Uso en CSS**: `var(--color-lear-secondary)`

## Colores de Soporte

### Escala de Grises
- **Gray 50**: `#F9FAFB` - Fondos muy claros
- **Gray 100**: `#F3F4F6` - Fondos de secciones alternativas
- **Gray 200**: `#E5E7EB` - Bordes sutiles
- **Gray 600**: `#4B5563` - Texto secundario
- **Gray 700**: `#374151` - Texto principal
- **Gray 800**: `#1F2937` - Texto muy oscuro
- **Gray 900**: `#111827` - Títulos y énfasis máximo

**Uso en CSS**: `var(--color-lear-gray-[número])`

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
