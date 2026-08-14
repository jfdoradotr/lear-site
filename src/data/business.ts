/**
 * Datos del negocio — fuente única de verdad.
 *
 * Dirección, horarios, teléfono y redes sociales viven aquí para no repetirlos
 * página por página. Se usan en el layout (footer + datos estructurados JSON-LD)
 * y en la página de Horarios y Ubicación.
 *
 * Si cambia un horario o el teléfono, cámbialo AQUÍ y se actualiza en todos lados.
 */

export interface HoursBlock {
  /** Etiqueta visible, ej. "Martes - Viernes" */
  label: string;
  /** Franjas horarias en formato legible, ej. "10:00 am - 1:00 pm" */
  slots: string[];
  /** Días en inglés para schema.org (openingHoursSpecification) */
  schemaDays: string[];
  /** Pares apertura/cierre en 24h para schema.org */
  schemaSlots: Array<{ opens: string; closes: string }>;
}

/** Teléfono en formato marcable E.164 — SIN el "1" que usa WhatsApp. */
export const phoneTel = '+528717558798';

/** Teléfono como se muestra al visitante. */
export const phoneDisplay = '+52 871 755 8798';

/**
 * Número para enlaces wa.me. Lleva el prefijo "1" de móviles mexicanos que
 * WhatsApp requiere y que NO debe usarse en un enlace tel:.
 */
export const whatsappNumber = '5218717558798';

export const name = 'LEAR';
export const legalName = 'LEAR - Centro de Fisioterapia & Rehabilitación Integral';
export const description =
  'Centro de Fisioterapia & Rehabilitación Integral en Torreón, Coahuila.';

export const address = {
  street: 'Av. Juárez 368',
  neighborhood: 'Primero de Cobián Centro',
  postalCode: '27000',
  city: 'Torreón',
  state: 'Coahuila',
  stateShort: 'Coah.',
  country: 'MX'
};

/** Coordenadas tomadas del mapa embebido de Google. */
export const geo = {
  latitude: 25.5382605,
  longitude: -103.4471077
};

export const social = [
  'https://www.facebook.com/fisioconelena',
  'https://www.instagram.com/centrolear/'
];

export const hours: HoursBlock[] = [
  {
    label: 'Martes - Viernes',
    slots: ['10:00 am - 1:00 pm', '2:00 pm - 7:00 pm'],
    schemaDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    schemaSlots: [
      { opens: '10:00', closes: '13:00' },
      { opens: '14:00', closes: '19:00' }
    ]
  },
  {
    label: 'Sábado',
    slots: ['10:00 am - 5:00 pm'],
    schemaDays: ['Saturday'],
    schemaSlots: [{ opens: '10:00', closes: '17:00' }]
  }
];

/** Dirección en una línea, para compartir por el Web Share API. */
export const addressText = [
  address.street,
  address.neighborhood,
  `${address.postalCode} ${address.city}, ${address.stateShort}`
].join(', ');

/**
 * Datos estructurados para buscadores.
 *
 * Se omiten `url` e `image` a propósito: requieren el dominio de producción,
 * que todavía no está confirmado. Agrégalos cuando se defina el dominio.
 */
export function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Physiotherapy'],
    name: legalName,
    description,
    telephone: phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street}, ${address.neighborhood}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    areaServed: {
      '@type': 'City',
      name: `${address.city}, ${address.state}`
    },
    openingHoursSpecification: hours.flatMap((block) =>
      block.schemaSlots.map((slot) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: block.schemaDays,
        opens: slot.opens,
        closes: slot.closes
      }))
    ),
    sameAs: social
  };
}
