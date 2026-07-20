/**
 * Sistema de Banners para Festividades
 *
 * Sistema completo de festividades mexicanas predefinidas con paletas de colores,
 * emojis característicos y una ventana de fechas activa (`activeWindow`).
 *
 * El banner se muestra/oculta automáticamente en el navegador del visitante según
 * la fecha de hoy — no requiere rebuild ni cron: basta con dejar la festividad
 * en `scheduledHolidays` y el componente decide cuál mostrar (si alguna aplica hoy).
 *
 * USO RÁPIDO:
 * 1. Agregar/quitar festividades en `scheduledHolidays` (abajo).
 * 2. Actualizar 'year' de cada una al año que corresponda.
 * 3. Set 'enabled: true' para activar el sistema completo.
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

export type HolidayMode = 'closure' | 'celebration';

export interface HolidayTheme {
  bgGradient: string;    // Clases Tailwind para gradiente de fondo
  iconColor: string;     // Clases Tailwind para color del contenedor de ícono
  textColor: string;     // Clases Tailwind para color del texto principal
  accentColor: string;   // Clases Tailwind para color de badges de fechas
  emoji: string;         // Emoji representativo de la festividad
}

export interface HolidayCelebration {
  title: string;     // Título celebratorio (ej. "¡Feliz Día de las Madres!")
  subtitle: string;  // Mensaje cálido de acompañamiento
}

/**
 * Ventana de fechas en que la festividad se considera "activa" (formato 'MM-DD').
 * Si `start` > `end` (ej. 12-20 -> 01-02), la ventana cruza el fin de año.
 */
export interface HolidayWindow {
  start: string;
  end: string;
}

interface HolidayConfig {
  id: string;
  message: string;
  closedDates: string[];
  reason: string;
  theme: HolidayTheme;
  icon: 'snowflake' | 'calendar' | 'info';
  activeWindow: HolidayWindow;
  celebration?: HolidayCelebration;
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
    icon: 'snowflake',
    // Cruza fin de año: 20 de diciembre -> 2 de enero
    activeWindow: { start: '12-20', end: '01-02' }
  },

  /**
   * ✝️ SEMANA SANTA
   * Fechas: Jueves Santo y Viernes Santo (VARIABLES - actualizar cada año, Pascua es una fiesta movible)
   * Colores: Púrpura, lavanda, violeta
   */
  'easter': {
    id: 'easter-{year}',
    message: 'Horario especial por Semana Santa',
    closedDates: [
      'Jueves Santo',
      'Viernes Santo'
      // NOTA: Actualizar con fechas específicas cada año
    ],
    reason: 'Asueto de Semana Santa',
    theme: {
      bgGradient: 'from-white/95 via-purple-50/80 to-violet-50/80',
      iconColor: 'from-purple-700 to-violet-700',
      textColor: 'text-gray-900',
      accentColor: 'text-purple-700',
      emoji: '✝️'
    },
    icon: 'calendar',
    // IMPORTANTE: Pascua es movible — verificar y actualizar esta ventana cada año.
    // Ejemplo 2026: Jueves Santo 2 de abril, Viernes Santo 3 de abril.
    activeWindow: { start: '04-01', end: '04-04' }
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
    icon: 'calendar',
    activeWindow: { start: '05-01', end: '05-01' }
  },

  /**
   * 💐 DÍA DE LAS MADRES
   * Fecha: 10 de mayo (fecha fija en México)
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
    icon: 'calendar',
    activeWindow: { start: '05-09', end: '05-10' },
    celebration: {
      title: '¡Feliz Día de las Madres!',
      subtitle: 'Hoy celebramos a quienes dan vida, cuidan y sostienen con amor. Gracias, mamá, por todo lo que haces. Con cariño, todo el equipo de LEAR. 💐'
    }
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
    icon: 'calendar',
    activeWindow: { start: '09-14', end: '09-16' }
  }
};

// ============================================================================
// CONFIGURACIÓN ACTIVA
// ============================================================================

/**
 * Una festividad "en rotación": el componente evalúa la fecha de hoy en el
 * navegador del visitante y muestra la primera cuya `activeWindow` coincida.
 */
export interface ScheduledHoliday {
  type: HolidayType;
  year: number;
  mode?: HolidayMode;
  // Solo se usa cuando type = 'custom'
  customConfig?: HolidayConfig;
}

/**
 * CONFIGURACIÓN PRINCIPAL
 *
 * - `enabled: false` apaga el sistema completo, sin importar la fecha.
 * - `scheduledHolidays`: lista de festividades a considerar. El banner se
 *   muestra automáticamente en la ventana de fechas de cada una (ver
 *   `activeWindow` en HOLIDAY_PRESETS) sin necesidad de redeploy ni cron.
 */
export const holidayBannerConfig = {
  enabled: true,
  scheduledHolidays: [
    { type: 'mothers-day', year: 2026, mode: 'celebration' },
    { type: 'independence', year: 2026, mode: 'closure' },
    { type: 'christmas', year: 2026, mode: 'closure' }
  ] as ScheduledHoliday[]
};

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

/**
 * Resuelve cada entrada de `scheduledHolidays` a su configuración completa
 * (con {year} reemplazado en el id). Usado por el componente para renderizar
 * un banner oculto por festividad; el script en el navegador decide cuál mostrar.
 */
export function getScheduledHolidayConfigs(): Array<HolidayConfig & { mode: HolidayMode }> {
  return holidayBannerConfig.scheduledHolidays.map((scheduled) => {
    const mode = scheduled.mode ?? 'closure';

    if (scheduled.type === 'custom') {
      if (!scheduled.customConfig) {
        throw new Error('customConfig es requerido cuando type = "custom"');
      }
      return {
        ...scheduled.customConfig,
        id: scheduled.customConfig.id.replace('{year}', scheduled.year.toString()),
        mode
      };
    }

    const preset = HOLIDAY_PRESETS[scheduled.type as Exclude<HolidayType, 'custom'>];
    return {
      ...preset,
      id: preset.id.replace('{year}', scheduled.year.toString()),
      mode
    };
  });
}

// ============================================================================
// EJEMPLOS DE USO
// ============================================================================

/**
 * EJEMPLO 1: Dejar solo Navidad y Día de las Madres en rotación
 *
 * export const holidayBannerConfig = {
 *   enabled: true,
 *   scheduledHolidays: [
 *     { type: 'christmas', year: 2026, mode: 'closure' },
 *     { type: 'mothers-day', year: 2026, mode: 'celebration' }
 *   ]
 * };
 */

/**
 * EJEMPLO 2: Agregar un evento especial custom
 *
 * scheduledHolidays: [
 *   {
 *     type: 'custom',
 *     year: 2026,
 *     mode: 'celebration',
 *     customConfig: {
 *       id: 'evento-especial-{year}',
 *       message: 'Aviso importante',
 *       closedDates: [],
 *       reason: 'Evento especial',
 *       theme: {
 *         bgGradient: 'from-white/95 via-blue-50/80 to-cyan-50/80',
 *         iconColor: 'from-blue-600 to-cyan-600',
 *         textColor: 'text-gray-900',
 *         accentColor: 'text-blue-700',
 *         emoji: '📌'
 *       },
 *       icon: 'info',
 *       activeWindow: { start: '03-15', end: '03-16' }
 *     }
 *   }
 * ]
 */

/**
 * EJEMPLO 3: Desactivar el sistema por completo
 *
 * export const holidayBannerConfig = {
 *   enabled: false,
 *   scheduledHolidays: []
 * };
 */
