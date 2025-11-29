# Cómo Agregar el Logo de LEAR

## 📍 Ubicación del Logo

Guarda tu archivo de logo en la siguiente ubicación:

```
public/images/logo.png
```

**O si tienes el logo en formato SVG (recomendado):**

```
public/images/logo.svg
```

## 🎨 Especificaciones del Logo

### Formato Recomendado
- **SVG** (Scalable Vector Graphics) - Recomendado para máxima calidad
- **PNG** con fondo transparente - Alternativa aceptable

### Dimensiones Recomendadas
- Altura: 200-300px (el sitio lo ajustará automáticamente a 64px de altura)
- Formato: Horizontal (el logo LEAR es horizontal)
- Fondo: **Transparente**

## 📝 Pasos para Agregar el Logo

### Opción 1: Usando Finder (macOS)

1. Abre Finder
2. Navega a: `/Users/juan.dorado/Developer/lear-website-case-study/public/images/`
3. Arrastra y suelta tu archivo de logo
4. Renómbralo a `logo.png` o `logo.svg`

### Opción 2: Usando Terminal

```bash
# Navega al directorio del proyecto
cd /Users/juan.dorado/Developer/lear-website-case-study

# Copia tu logo (ajusta la ruta de origen según donde esté tu logo)
cp ~/Downloads/lear-logo.png public/images/logo.png

# O si es SVG:
cp ~/Downloads/lear-logo.svg public/images/logo.svg
```

## ✅ Verificar que Funcione

1. Guarda el logo en `public/images/`
2. El servidor de desarrollo (si está corriendo) detectará el cambio automáticamente
3. Recarga la página en el navegador (`http://localhost:4321`)
4. El logo debería aparecer en el header (esquina superior izquierda)

## 🔧 Si usas SVG en lugar de PNG

Si decides usar SVG, actualiza el Layout para usar `.svg`:

**Archivo:** `src/layouts/Layout.astro` (línea ~30)

Cambia:
```html
<img
  src="/images/logo.png"
  alt="LEAR Logo"
  class="h-16 w-auto"
/>
```

Por:
```html
<img
  src="/images/logo.svg"
  alt="LEAR Logo"
  class="h-16 w-auto"
/>
```

## 💡 Consejos Adicionales

### Ajustar el Tamaño del Logo
Si el logo se ve muy grande o pequeño, edita la clase `h-16` en `src/layouts/Layout.astro`:

- `h-12` = 48px (más pequeño)
- `h-16` = 64px (actual)
- `h-20` = 80px (más grande)
- `h-24` = 96px (aún más grande)

### Fondo del Logo
El header tiene fondo **blanco**, así que:
- ✅ El logo debe tener fondo **transparente**
- ❌ No uses fondo gris o de color

### Formato del Logo Actual
Según tu imagen, el logo LEAR tiene:
- Texto "LEAR" en azul `#0D4B92`
- "en" en script cyan `#00B6E5`
- Figura humana con puntos en la columna
- Subtítulo blanco: "CENTRO DE FISIOTERAPIA & REHAB. INTEGRAL"

**Nota:** Como el subtítulo es blanco, asegúrate de que la versión del logo que uses tenga el subtítulo en **gris oscuro** o **azul** para que sea visible sobre fondo blanco.

## ❓ Problemas Comunes

### El logo no aparece
1. Verifica que el archivo esté en `public/images/logo.png` o `logo.svg`
2. Verifica que el nombre sea exactamente `logo.png` (minúsculas)
3. Recarga la página con Cmd+Shift+R (Mac) o Ctrl+Shift+R (Windows)

### El logo se ve pixelado
- Usa un archivo de mayor resolución
- Mejor aún, usa formato SVG

### El subtítulo no se ve (es blanco)
- Exporta una versión del logo con subtítulo en color oscuro
- O elimina el subtítulo del logo (ya aparece en el sitio como texto)
