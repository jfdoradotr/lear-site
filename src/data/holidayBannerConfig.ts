/**
 * Sistema de Banners para Festividades
 *
 * Sistema completo de festividades mexicanas predefinidas con paletas de colores
 * y emojis característicos. Incluye opción custom para casos especiales.
 *
 * USO RÁPIDO:
 * 1. Cambiar 'type' a la festividad deseada
 * 2. Actualizar 'year' al año actual
 * 3. Set 'enabled: true' para activar
 */

// ============================================================================
// TIPOS Y INTERFACES
// ============================================================================

export type HolidayType =
  | 'christmas'      // 🎄 Navidad y Año Nuevo
  | 'easter'         // ✝️ Semana Santa
  | 'labor-day'      // 💼 Día del Trabajo
  | 'mothers-day'    // 💐 Día de las Madres
  | 'independence'   // 🇲🇽 Día de la Independencia
  | 'custom';        // 📌 Personalizado

export interface HolidayTheme {
  bgGradient: string;    // Clases Tailwind para gradiente de fondo
  iconColor: string;     // Clases Tailwind para color del contenedor de ícono
  textColor: string;     // Clases Tailwind para color del texto principal
  accentColor: string;   // Clases Tailwind para color de badges de fechas
  emoji: string;         // Emoji representativo de la festividad
}

interface HolidayConfig {
  id: string;
  message: string;
  closedDates: string[];
  reason: string;
  theme: HolidayTheme;
  icon: 'snowflake' | 'calendar' | 'info';
}

// ============================================================================
// FESTIVIDADES PREDEFINIDAS
// ============================================================================

const HOLIDAY_PRESETS: Record<Exclude<HolidayType, 'custom'>, HolidayConfig> = {
  /**
   * 🎄 NAVIDAD Y AÑO NUEVO
   * Fechas: 24, 25, 31 de diciembre + 1 de enero
   * Colores: Rojo oscuro, verde bosque, dorado
   */
  'christmas': {
    id: 'christmas-{year}',
    message: 'Horario especial por temporada navideña',
    closedDates: [
      '24 de diciembre',
      '25 de diciembre',
      '31 de diciembre',
      '1 de enero'
    ],
    reason: 'Temporada Navideña y Año Nuevo',
    theme: {
      bgGradient: 'from-white/95 via-red-50/80 to-green-50/80',
      iconColor: 'from-red-700 to-green-700',
      textColor: 'text-gray-900',
      accentColor: 'text-red-700',
      emoji: '🎄'
    },
    icon: 'snowflake'
  },

  /**
   * ✝️ SEMANA SANTA
   * Fechas: Jueves Santo y Viernes Santo (VARIABLES - actualizar cada año)
   * Colores: Púrpura, lavanda, violeta
   */
  'easter': {
    id: 'easter-{year}',
    message: 'Horario especial por Semana Santa',
    closedDates: [
      'Jueves Santo',
      'Viernes Santo'
      // NOTA: Actualizar con fechas específicas cada año
      // Ejemplo 2026: '17 de abril', '18 de abril'
    ],
    reason: 'Asueto de Semana Santa',
    theme: {
      bgGradient: 'from-white/95 via-purple-50/80 to-violet-50/80',
      iconColor: 'from-purple-700 to-violet-700',
      textColor: 'text-gray-900',
      accentColor: 'text-purple-700',
      emoji: '✝️'
    },
    icon: 'calendar'
  },

  /**
   * 💼 DÍA DEL TRABAJO
   * Fecha: 1 de mayo
   * Colores: Naranja, amarillo, cálidos
   */
  'labor-day': {
    id: 'labor-day-{year}',
    message: 'Horario especial por Día del Trabajo',
    closedDates: ['1 de mayo'],
    reason: 'Día del Trabajo',
    theme: {
      bgGradient: 'from-white/95 via-orange-50/80 to-yellow-50/80',
      iconColor: 'from-orange-600 to-yellow-600',
      textColor: 'text-gray-900',
      accentColor: 'text-orange-700',
      emoji: '💼'
    },
    icon: 'calendar'
  },

  /**
   * 💐 DÍA DE LAS MADRES
   * Fecha: 10 de mayo
   * Colores: Rosa, dorado, rosado suave
   */
  'mothers-day': {
    id: 'mothers-day-{year}',
    message: 'Horario especial por Día de las Madres',
    closedDates: ['10 de mayo'],
    reason: 'Día de las Madres',
    theme: {
      bgGradient: 'from-white/95 via-pink-50/80 to-rose-50/80',
      iconColor: 'from-pink-600 to-rose-600',
      textColor: 'text-gray-900',
      accentColor: 'text-pink-600',
      emoji: '💐'
    },
    icon: 'calendar'
  },

  /**
   * 🇲🇽 DÍA DE LA INDEPENDENCIA
   * Fecha: 16 de septiembre
   * Colores: Verde mexicano, blanco, rojo mexicano (bandera)
   */
  'independence': {
    id: 'independence-{year}',
    message: 'Horario especial por Día de la Independencia',
    closedDates: ['16 de septiembre'],
    reason: 'Día de la Independencia de México',
    theme: {
      bgGradient: 'from-green-50/80 via-white/95 to-red-50/80',
      iconColor: 'from-green-700 via-white to-red-700',
      textColor: 'text-gray-900',
      accentColor: 'text-green-700',
      emoji: '🇲🇽'
    },
    icon: 'calendar'
  }
};

// ============================================================================
// CONFIGURACIÓN ACTIVA
// ============================================================================

/**
 * CONFIGURACIÓN PRINCIPAL
 *
 * Para activar una festividad predefinida:
 * 1. Set enabled: true
 * 2. Cambiar 'type' a la festividad deseada
 * 3. Actualizar 'year' al año corriente
 *
 * Para usar custom:
 * 1. Set enabled: true
 * 2. Set type: 'custom'
 * 3. Definir customConfig con todos los detalles
 */
export const holidayBannerConfig = {
  enabled: false,
  type: 'christmas' as HolidayType,
  year: 2025,

  // Solo se usa cuando type = 'custom'
  customConfig: undefined as HolidayConfig | undefined
};

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

/**
 * Obtiene la configuración activa de la festividad
 *
 * - Si type es una festividad predefinida, retorna el preset correspondiente
 * - Si type es 'custom', retorna customConfig
 * - Reemplaza {year} en el ID con el año actual
 *
 * @returns Configuración completa de la festividad activa
 */
export function getActiveHolidayConfig(): HolidayConfig {
  const { type, year, customConfig } = holidayBannerConfig;

  if (type === 'custom') {
    if (!customConfig) {
      throw new Error('customConfig es requerido cuando type = "custom"');
    }
    return {
      ...customConfig,
      id: customConfig.id.replace('{year}', year.toString())
    };
  }

  const preset = HOLIDAY_PRESETS[type as Exclude<HolidayType, 'custom'>];
  return {
    ...preset,
    id: preset.id.replace('{year}', year.toString())
  };
}

// ============================================================================
// EJEMPLOS DE USO
// ============================================================================

/**
 * EJEMPLO 1: Usar Navidad 2025-2026
 *
 * export const holidayBannerConfig = {
 *   enabled: true,
 *   type: 'christmas' as HolidayType,
 *   year: 2025
 * };
 */

/**
 * EJEMPLO 2: Usar Día de las Madres 2026
 *
 * export const holidayBannerConfig = {
 *   enabled: true,
 *   type: 'mothers-day' as HolidayType,
 *   year: 2026
 * };
 */

/**
 * EJEMPLO 3: Usar Custom para evento especial
 *
 * export const holidayBannerConfig = {
 *   enabled: true,
 *   type: 'custom' as HolidayType,
 *   year: 2026,
 *   customConfig: {
 *     id: 'evento-especial-{year}',
 *     message: 'Aviso importante',
 *     closedDates: ['15 de marzo', '16 de marzo'],
 *     reason: 'Evento especial',
 *     theme: {
 *       bgGradient: 'from-white/95 via-blue-50/80 to-cyan-50/80',
 *       iconColor: 'from-blue-600 to-cyan-600',
 *       textColor: 'text-gray-900',
 *       accentColor: 'text-blue-700',
 *       emoji: '📌'
 *     },
 *     icon: 'info'
 *   }
 * };
 */

/**
 * EJEMPLO 4: Desactivar banner
 *
 * export const holidayBannerConfig = {
 *   enabled: false,
 *   type: 'christmas' as HolidayType,
 *   year: 2025
 * };
 */
