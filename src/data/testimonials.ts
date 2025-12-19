export interface Testimonial {
  id: number;
  initials: string;
  name: string;
  year: number;
  month: number; // 1-12 para ordenar
  monthName: string;
  text: string;
  // Campos opcionales para testimonios destacados
  featured?: boolean;
  featuredSince?: string;
  shortText?: string;
  fullText?: string;
}

const allTestimonials: Testimonial[] = [
  // Testimonio destacado
  {
    id: 1,
    initials: "JD",
    name: "Juan De Dios",
    year: 2022,
    month: 8,
    monthName: "Agosto",
    text: "", // No se usa para destacados
    featured: true,
    featuredSince: "Agosto 2022",
    shortText: `Desde mi primera terapia me hiciste sentir muy a gusto, como si fuéramos amigos de años. Cada explicación que me hacías coincidía con el diagnóstico, lo que me hizo confiar de lleno en tus manos, tus conocimientos y capacidad para dejar mi terapia a tu consideración.

Con cada terapia, cada cambio, cada ajuste, cada recomendación, se veía reflejada una mejora. No importaba la afección, siempre salía mejor en cada sesión...`,
    fullText: `Para comenzar mi experiencia, quiero aclarar que, como la mayoría, te contacté por recomendación, a pesar de que soy alguien muy selectivo, me sentí muy cómodo desde la primera terapia, me hiciste sentir muy a gusto, además, tu forma de ser y tratar, me hacía sentir como si fuéramos amigos de años, eso, aunado a que cada explicación que me hacías coincidía con el diagnóstico dado por mi trauma, me hizo confiar de lleno en tus manos, tus conocimientos y capacidad para dejar mi terapia a tu consideración.

Eso solo para comenzar, ya que lo que me hizo mantenerme como tu paciente fue que, con cada terapia, cada cambio, cada ajuste, cada recomendación, se veía reflejada una mejora, no importaba si llegaba con una afección en la espalda y pies (que fue con lo que comencé), en las manos, brazos, hombros, piernas, no importaba, siempre salía mejor en cada sesión.

También, había ocasiones (por situaciones externas) que yo sentía que no mejoraba, o a veces sentía mayor dolor en algunas áreas del cuerpo y cuando te lo externaba, me tranquilizabas al explicarme el porqué sentía esas inquietudes y era cierto, hacía los ajustes que me recomendabas y se comprobaba tal cual lo que me habías dicho.

Ya después de varios años, me ha tocado vivir no solo mi evolución, sino también la tuya como terapeuta, ya que he sido testigo de que no te conformas con lo que ya sabes, sino que siempre has buscado el mejorar de manera continua, tanto con cursos como con herramientas, que he sido prueba de que a todo le has sacado provecho, ya que he fungido como tu conejillo de indias (no es queja) ya que siempre salí beneficiado.

También he sido testigo de cómo ha sido tu crecimiento como emprendedora, ya que me empezaste a dar terapia a domicilio, algunas sesiones fueron en tu casa ajustada como clínica, luego en el domicilio actual pero en el piso de arriba y, de un tiempo para acá, en la clínica actual, en frente de la alameda, en lo que era una farmacia, y que, poco a poco, lo fueron acondicionando hasta dejarlo como lo que buscabas, una clínica profesional, en toda la extensión de la palabra, con divisiones y con más personal.

Ahora, si a alguien le llamara la atención cuando mencioné que llevo años como tu paciente, quiero aclarar que no es porque no evolucione, porque no me sienta mejor, o porque no funcionen las terapias, sino todo lo contrario, mi primera sesión se dio porque fui diagnosticado, o se me detectó, una escoliosis, por lo que debo de estar siempre al pendiente, además, toda la vida he practicado algún deporte, desde el kinder hasta la fecha (tengo más de 35 años), he jugado basketball, fútbol americano, fútbol soccer, he practicado breakdance, he asistido a gimnasios a hacer ejercicios con pesas, he hecho HIIT, etc.

Lo que mantengo a la fecha, o al menos trato, es el jugar fútbol y ejercicio con pesas, por lo que cabe aclarar que no solo voy a mis terapias de recuperación, sino a masajes de relajación y de descarga, y el asistir contigo me ha permitido mantener mis actividades diarias, como debería de ser, sin dolor y con confianza.

¡Muchas gracias por ser mi fisioterapeuta!`
  },

  // Testimonios regulares
  {
    id: 2,
    initials: "LM",
    name: "Luis M.",
    year: 2025,
    month: 12,
    monthName: "Diciembre",
    text: "Sí, estoy un poco más inflamado pero porque jugué ayer, recuerdo que algo así me habías comentado que podía pasar. Pero me siento mucho mejor, con más rango de movimiento."
  },
  {
    id: 3,
    initials: "MO",
    name: "Myriam O.",
    year: 2025,
    month: 12,
    monthName: "Diciembre",
    text: "A mí en lo personal me gustó mucho la terapia y tú forma de ser eres muy linda y haces sentir cómodo y tranquilo gracias por todo tu apoyo espero regresar pronto 🤗❤️"
  },
  {
    id: 4,
    initials: "EV",
    name: "Estephania V.",
    year: 2025,
    month: 12,
    monthName: "Diciembre",
    text: "Tuve la oportunidad de asistir a terapia con Elena y fue una experiencia súper agradable, es una persona profesional, empática y con gran capacidad para escuchar. Me ayudó muchísimo también a encontrar herramientas para mejorar mi bienestar. La recomiendo ampliamente ✨"
  },
  {
    id: 5,
    initials: "LV",
    name: "Lorena V.",
    year: 2025,
    month: 12,
    monthName: "Diciembre",
    text: "Súper recomendado la atención 10/10, me ayudaron mucho a recuperarme de una lesión que tenía, claro que volvería!😊"
  },
  {
    id: 6,
    initials: "AS",
    name: "Ana S.",
    year: 2025,
    month: 11,
    monthName: "Noviembre",
    text: "Gracias Elena!! Quedamos campeonas en dobles y no me dolió nadita 😘"
  },
  {
    id: 7,
    initials: "JM",
    name: "Juanita M.",
    year: 2025,
    month: 11,
    monthName: "Noviembre",
    text: "Mi mamá está FASCINADA contigo 🥰 Llegó muy feliz y caminando sin su bastón 🥹😍 Dice: tu amiga tiene unas manos uff, ¡mágicas! Está súper feliz y encantada de ver resultados y, más que verlos, sentirlos."
  },
  {
    id: 8,
    initials: "LB",
    name: "Lupita B.",
    year: 2023,
    month: 10,
    monthName: "Octubre",
    text: "Excelente servicio, atención y buena charla, sin restarle lo profesional que es. Yo llegué con un dolor fuerte en mi rodilla izquierda y bien hinchada y gracias a Elena ya estoy muy bien... Se la súper recomiendo 10/10."
  }
];

// Ordenar testimonios por fecha (más reciente primero)
export const testimonials = allTestimonials.sort((a, b) => {
  // Primero por año descendente
  if (b.year !== a.year) {
    return b.year - a.year;
  }
  // Luego por mes descendente
  return b.month - a.month;
});
