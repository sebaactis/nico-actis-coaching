import type { Certification, Testimonial, FAQItem, MethodStep } from "../types";

export const COACH_INFO = {
  name: "Nico Actis",
  title: "Coach Ontológico & Deportivo de Alto Rendimiento",
  headline: "POTENCIÁ TU MENTE. ELEVÁ TU RENDIMIENTO.",
  subheadline:
    "Acompañamiento integral para deportistas profesionales y de alto rendimiento. Porque antes que deportistas, somos personas.",
  // Contacto fragmentado a proposito: numero y mail se ensamblan solo al
  // hacer clic, para que no queden legibles en el codigo ni como texto.
  whatsappParts: ["54911", "3296", "3401"],
  emailUser: "nicoactis3251",
  emailDomain: "gmail.com",
  instagram: "coachnicoactis",
  instagramUrl: "https://instagram.com/coachnicoactis",
  // Link del Schedule de citas de Google Calendar (agendamiento de la primera charla)
  calendarUrl: "https://calendar.app.google/g8FV2Ai2J9rCvksV6",
  location: "Sesiones Online (Global) & Presenciales",
  motto:
    "El deportista puede ser quien compite, pero la persona es quien vive todo el proceso.",
  stats: [
    {
      value: "+10",
      label: "Certificaciones Internacionales",
      sublabel: "ICF, AACOP, Barça Hub",
    },
    {
      value: "100%",
      label: "Proceso Personalizado",
      sublabel: "Adaptado a tu calendario competitivo",
    },
    {
      value: "1 a 1",
      label: "Sesiones Online & Presencial",
      sublabel: "Acompañamiento continuo semana a semana",
    },
    {
      value: "+50",
      label: "Futbolistas Profesionales",
      sublabel: "En clubes de Argentina, Brasil, Portugal, Colombia y Uruguay",
    },
  ],
};

// Ensambla los datos de contacto solo en tiempo de ejecucion (al hacer clic).
const getWhatsappNumber = (): string => COACH_INFO.whatsappParts.join("");
const getEmailAddress = (): string =>
  `${COACH_INFO.emailUser}@${COACH_INFO.emailDomain}`;
export const whatsappLink = (message = ""): string => {
  const base = `https://wa.me/${getWhatsappNumber()}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
export const emailLink = (): string => `mailto:${getEmailAddress()}`;

export const ABOUT_DATA = {
  intro: "Soy Nico Actis",
  role: "Coach Ontológico Profesional & Coach Deportivo",
  missionTitle: "Mi Misión",
  missionSummary:
    "Mi misión es acompañar a los deportistas en su camino, no solo para potenciar su rendimiento, sino también para ayudarlos a crecer como personas.",
  paragraphs: [
    "Porque antes que deportistas, somos personas. Y todo lo que vivimos fuera del campo, la cancha o la pista también influye en nuestra manera de competir, entrenar y afrontar los desafíos.",
    "Por eso, mi acompañamiento busca trabajar de manera integral: fortalecer recursos mentales y emocionales, afrontar dificultades, gestionar las emociones, superar obstáculos y desarrollar herramientas que permitan al deportista desenvolverse con mayor confianza y equilibrio, tanto en el deporte como en su vida personal.",
    "Creo que el verdadero crecimiento no consiste únicamente en conseguir mejores resultados, sino en convertirse en una persona más preparada para afrontar los desafíos que el deporte y la vida presentan.",
    "Mi compromiso es acompañar a cada deportista respetando su historia, sus tiempos y sus objetivos, entendiendo que detrás de cada rendimiento hay una persona con emociones, sueños, miedos, fortalezas y desafíos.",
  ],
  highlightQuote:
    "Porque el deportista puede ser quien compite, pero la persona es quien vive todo el proceso.",
  pillars: [
    {
      title: "Gestión Emocional & Mental",
      description:
        "Herramientas para canalizar la presión, el miedo al error, la frustración y la ansiedad pre-competitiva.",
      icon: "Brain",
    },
    {
      title: "Autoconocimiento y Hábitos",
      description:
        "Identificar qué necesitás y construir rutinas saludables que sostengan tu nivel en el tiempo.",
      icon: "Compass",
    },
    {
      title: "Confianza & Liderazgo",
      description:
        "Valorar tu recorrido, fortalecer tu autoestima y establecer límites sanos en tu entorno deportivo y personal.",
      icon: "ShieldCheck",
    },
    {
      title: "Transferencia al Campo",
      description:
        "Ejercicios concretos durante la semana para plasmar los avances internos en resultados deportivos reales.",
      icon: "Trophy",
    },
  ],
};

export const METHODOLOGY_DATA: MethodStep[] = [
  {
    number: "01",
    title: "Diagnóstico & Planificación Integral",
    subtitle: "Sesiones Online o Presenciales",
    description:
      "Espacios de conversación profunda donde abordamos tanto los desafíos dentro del campo de juego como los aspectos personales que influyen en tu bienestar.",
    details: [
      "Planificación de objetivos anuales, de temporada y semanales",
      "Identificación de bloqueos, creencias limitantes y patrones de conducta",
      "Diseño de un plan de trabajo 100% individualizado",
    ],
    iconName: "Target",
  },
  {
    number: "02",
    title: "Conocete, Comprendete y Construí Hábitos",
    subtitle: "La base de los cambios sostenibles",
    description:
      "El autoconocimiento es el punto de partida. Te acompaño a identificar qué necesitás, qué te hace bien y qué querés transformar para incorporar hábitos saludables en sintonía con tus valores.",
    details: [
      "Alineación entre valores personales y metas deportivas",
      "Incorporación de rutinas de descanso, concentración y foco",
      "Estrategias para sostener la disciplina sin caer en el desgaste mental",
    ],
    iconName: "Flame",
  },
  {
    number: "03",
    title: "Reconocé tu Valor y Mejorá tus Vínculos",
    subtitle: "Confianza, comunicación y entorno",
    description:
      "Aprendé a mirarte con mayor confianza y reconocimiento, valorando tu recorrido y capacidades. Trabajá en el establecimiento de límites y construí vínculos conscientes.",
    details: [
      "Fortalecimiento de la autoimagen y seguridad competitiva",
      "Comunicación asertiva con entrenadores, compañeros y cuerpo técnico",
      "Gestión de relaciones y entorno del deportista de élite",
    ],
    iconName: "Users",
  },
  {
    number: "04",
    title: "Ejercicios Semanales & Enfoque Competitivo",
    subtitle: "Llevar la versión mejorada a la cancha",
    description:
      "Realizamos ejercicios y tareas prácticas durante la semana para que la persona detrás del deportista evolucione día a día y traslade esa fortaleza a la competencia.",
    details: [
      "Técnicas de reprogramación y respiración bajo presión",
      "Seguimiento continuo pre y post partidos / torneos",
      "Evaluación y ajuste constante del plan estratégico",
    ],
    iconName: "Activity",
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "icf",
    title: "Coach Ontológico Profesional",
    institution: "International Coach Federation (ICF)",
    category: "icf_aacop",
    badgeLabel: "Certificación Internacional",
    description:
      "Formación de máximo estándar global en procesos de acompañamiento ontológico y transformación personal.",
  },
  {
    id: "aacop",
    title: "Coach Deportivo",
    institution: "Activación X — Avalado por AACOP",
    category: "icf_aacop",
    badgeLabel: "Aval Nacional",
    description:
      "Especialización en dinámica deportiva, liderazgo en equipos y rendimiento atlético de alto nivel.",
  },
  {
    id: "ciemec-1",
    title: "Clínica de Emociones en el Deporte",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Gestión Emocional",
    description:
      "Abordaje especializado en la regulación de la frustración, el miedo al fallo y la euforia en competencia.",
  },
  {
    id: "ciemec-2",
    title: "Métodos de Concentración y Mentality",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Foco & Concentración",
    description:
      "Desarrollo del estado de 'Flow' y técnicas de atención focalizada en momentos de máxima exigencia.",
  },
  {
    id: "ciemec-3",
    title: "Neurociencia Educativa Aplicada al Deporte",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Neurociencia",
    description:
      "Comprensión del funcionamiento cerebral y circuitos de aprendizaje motor y toma de decisiones rápida.",
  },
  {
    id: "neuro-crecimiento",
    title: "Inteligencia Emocional para el Crecimiento Personal",
    institution: "Especialización Avanzada",
    category: "neuroscience",
    badgeLabel: "Desarrollo Humano",
    description:
      "Capacidades intrapersonales e interpersonales para la resiliencia y el bienestar integral.",
  },
  {
    id: "quimica-cerebro",
    title: "La Química del Cerebro: Neurociencia en la Vida Diaria",
    institution: "Curso de Especialización 2023",
    category: "neuroscience",
    year: "2023",
    badgeLabel: "Neuroquímica",
    description:
      "Neurotransmisores (dopamina, cortisol, adrenalina) aplicados al manejo del estrés y la motivación.",
  },
  {
    id: "barca-1",
    title: "Variables Psicológicas y Rendimiento Deportivo",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description:
      "Estudio de las variables determinantes en el rendimiento atlético de clase mundial.",
  },
  {
    id: "barca-2",
    title: "Técnicas de Intervención Psicológicas",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description:
      "Estrategias de intervención aplicadas al deportista en fases de entrenamiento y competencia.",
  },
  {
    id: "barca-3",
    title: "Contextualización del Entorno del Deportista de Élite",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description:
      "Comprensión integral de las presiones mediáticas, contractuales y familiares en el alto rendimiento.",
  },
  {
    id: "barca-4",
    title: "La Vida del Deportista de Élite",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description:
      "Análisis biopsicosocial de las demandas y desafíos que atraviesan los atletas profesionales.",
  },
  {
    id: "reprogramacion",
    title: "Reprogramación de Pensamientos y Emociones Tóxicas",
    institution: "Entrenamiento Especializado",
    category: "cognitive",
    badgeLabel: "Mente Fuerte",
    description:
      "Eliminación de diálogo interno destructivo y reestructuración de esquemas mentales automáticos.",
  },
  {
    id: "tcc",
    title: "Certificación en Técnicas Cognitivo Conductuales",
    institution: "Formación Clínica Aplicada",
    category: "cognitive",
    badgeLabel: "TCC",
    description:
      "Herramientas basadas en evidencia para la modificación de hábitos y patrones de conducta limitantes.",
  },
  {
    id: "ansiedad-itcc",
    title: "Tratamiento de Trastornos de Ansiedad, Pánico y Fobias",
    institution: "ITCC (Instituto de Terapia Cognitivo Conductual)",
    category: "cognitive",
    badgeLabel: "ITCC Certificado",
    description:
      "Estrategias específicas para superar bloqueos de pánico, ansiedad de ejecución y estrés agudo.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "tomas-cuello",
    name: "Tomás Cuello",
    sport: "Fútbol Profesional",
    teamOrRole: "Atlético Mineiro • Brasil",
    image: "/images/Tomas_Cuello.jpeg",
    isFeatured: true,
    highlight: "Brasileirão & Copa Libertadores",
  },
  {
    id: "agustin-ladstatter",
    name: "Agustín Ladstatter",
    sport: "Fútbol Profesional",
    teamOrRole: "San Lorenzo • Argentina",
    image: "/images/Agustin_Ladstatter.jpeg",
    isFeatured: true,
    highlight: "Primera División • Liga Profesional",
  },
  {
    id: "benjamin-sagues-barreiro",
    name: "Benjamín Sagüés Barreiro",
    sport: "Fútbol Profesional",
    teamOrRole: "Estudiantes de La Plata • Argentina",
    image: "/images/Benjamin_Sagues_Barreiro.jpeg",
    isFeatured: true,
    highlight: "Primera División • Alta Competencia",
  },
  {
    id: "eber-ocampo",
    name: "Eber Ocampo",
    sport: "Fútbol Profesional",
    teamOrRole: "San Lorenzo • Argentina",
    image: "/images/Eber_Ocampo.jpeg",
    isFeatured: true,
    highlight: "Primera División • Liga Profesional",
  },
  {
    id: "felipe-tempone",
    name: "Felipe Tempone",
    sport: "Fútbol Profesional",
    teamOrRole: "Independiente • Argentina",
    image: "/images/Felipe_Tempone.jpeg",
    isFeatured: true,
    highlight: "Primera División • Proyección",
  },
  {
    id: "francisco-scarpeccio",
    name: "Francisco Scarpeccio",
    sport: "Fútbol Profesional",
    teamOrRole: "Newell's Old Boys • Argentina",
    image: "/images/Francisco_Scarpeccio.jpeg",
    isFeatured: true,
    highlight: "Primera División • Liga Profesional",
  },
  {
    id: "juan-villordo",
    name: "Juan Villordo",
    sport: "Fútbol Profesional",
    teamOrRole: "River Plate • Argentina",
    image: "/images/Juan_Villordo.jpeg",
    isFeatured: true,
    highlight: "Primera División • Máxima Exigencia",
  },
  {
    id: "lucas-ibarra",
    name: "Lucas Ibarra",
    sport: "Fútbol Profesional",
    teamOrRole: "Peñarol • Uruguay",
    image: "/images/Lucas_Ibarra.jpeg",
    isFeatured: true,
    highlight: "Primera División • Fútbol Uruguayo",
  },
  {
    id: "tyago-ayala",
    name: "Tyago Ayala",
    sport: "Fútbol Profesional",
    teamOrRole: "Sarmiento • Argentina",
    image: "/images/Tyago_Ayala.jpeg",
    isFeatured: true,
    highlight: "Primera División • Liga Profesional",
  },
  {
    id: "ignacio-cuello",
    name: "Ignacio Cuello",
    sport: "Fútbol Profesional",
    teamOrRole: "Central Norte • Argentina",
    image: "/images/Ignacio_Cuello.jpeg",
    isFeatured: true,
    highlight: "Competencia Profesional • Alto Rendimiento",
  },
  {
    id: "rodrigo-dudok",
    name: "Rodrigo Dudok",
    sport: "Fútbol Profesional",
    teamOrRole: "Estrela da Amadora • Portugal",
    image: "/images/Rodrigo_Dudok.jpeg",
    isFeatured: true,
    highlight: "Primeira Liga • Portugal",
  },
  {
    id: "kevin-londono",
    name: "Kevin Londoño",
    sport: "Fútbol Profesional",
    teamOrRole: "Cúcuta Deportivo • Colombia",
    image: "/images/Kevin_Londono.jpeg",
    isFeatured: true,
    highlight: "Fútbol Profesional • Colombia",
  },
  {
    id: "lautaro-bursich",
    name: "Lautaro Bursich",
    sport: "Fútbol Profesional",
    teamOrRole: "Talleres de Remedios de Escalada • Argentina",
    image: "/images/Lautaro_Bursich.jpeg",
    isFeatured: true,
    highlight: "Fútbol Profesional • Plantel Superior",
  },
  {
    id: "estanislao-lopez",
    name: "Estanislao López",
    sport: "Fútbol Profesional",
    teamOrRole: "Colón de Santa Fe • Argentina",
    image: "/images/Estanislao_Lopez.jpeg",
    isFeatured: true,
    highlight: "Fútbol Profesional • Argentina",
  },
  {
    id: "fede-postel",
    name: "Fede Postel",
    sport: "Fútbol Profesional",
    teamOrRole: "UAI Urquiza • Argentina",
    image: "/images/Fede_Postel.jpeg",
    isFeatured: true,
    highlight: "Fútbol Profesional • Argentina",
  },
  {
    id: "mateo-ureta",
    name: "Mateo Ureta",
    sport: "Fútbol Profesional",
    teamOrRole: "Peñarol • Uruguay",
    image: "/images/Mateo_Ureta.jpeg",
    isFeatured: true,
    highlight: "Primera División • Fútbol Uruguayo",
  },
  {
    id: "simon-perez",
    name: "Simón Pérez",
    sport: "Fútbol Profesional",
    teamOrRole: "Nueva Chicago • Argentina",
    image: "/images/Simon_Perez.jpeg",
    isFeatured: true,
    highlight: "Fútbol Profesional • Argentina",
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "que-es-el-coaching",
    question: "¿Qué es el Coaching?",
    answer: `El Coaching Ontológico es un proceso de acompañamiento que busca generar cambios en la manera en que una persona observa, interpreta y se relaciona con su realidad.

Parte de la idea de que no siempre podemos cambiar lo que sucede, pero sí podemos transformar la manera en que lo interpretamos, las emociones desde las que actuamos y las acciones que elegimos llevar adelante.

A través de conversaciones, preguntas y herramientas específicas, el coaching permite identificar creencias, pensamientos y patrones de comportamiento que pueden estar limitando nuestro desarrollo, para abrir nuevas posibilidades y encontrar recursos que nos permitan afrontar los desafíos de una manera diferente.

En el ámbito deportivo, este proceso puede ayudar al deportista a desarrollar una mayor consciencia sobre sí mismo, gestionar sus emociones, fortalecer su confianza, afrontar dificultades y construir nuevas formas de relacionarse con el entrenamiento, la competencia y los resultados.

El objetivo no es decirle al deportista qué tiene que hacer, sino acompañarlo a descubrir nuevas posibilidades para que pueda elegir y actuar de una manera más consciente y efectiva.`,
  },
  {
    id: "para-que-son-las-sesiones",
    question: "¿Para qué son las sesiones de Coaching?",
    answer: `Las sesiones de Coaching son un espacio de acompañamiento y reflexión diseñado para que el deportista pueda conocerse mejor, comprender lo que le sucede y encontrar nuevas maneras de afrontar aquello que hoy representa un desafío.

Durante las sesiones trabajamos sobre aquellas situaciones que pueden estar influyendo en su bienestar y en su rendimiento: emociones, pensamientos, confianza, frustración, presión, miedos, toma de decisiones, objetivos, vínculos y diferentes situaciones propias de la vida deportiva y personal.

El objetivo es que el deportista pueda desarrollar una mayor consciencia sobre sí mismo, reconocer sus recursos y descubrir nuevas posibilidades de acción.

Porque muchas veces no se trata de hacer más, sino de aprender a observar de otra manera para poder actuar de una manera diferente.

Las sesiones no buscan cambiar quién es el deportista, sino acompañarlo a descubrir y potenciar los recursos que ya existen en él. Porque cuando trabajamos con la persona, también estamos fortaleciendo al deportista.`,
  },
  {
    id: "como-es-la-modalidad",
    question: "¿Cómo es la modalidad de las sesiones (Online o Presencial)?",
    answer: `Trabajo con sesiones tanto en modalidad Online (a través de videollamadas para deportistas de cualquier provincia o país del mundo) como Presenciales. 

La duración promedio de cada encuentro es de 50 a 60 minutos con una frecuencia semanal o quincenal según la etapa de la temporada y las necesidades específicas del atleta. Además, contamos con contacto y tareas prácticas entre semana para acompañar tu calendario de entrenamientos y partidos.`,
  },
  {
    id: "a-quien-esta-dirigido",
    question: "¿A qué disciplinas o niveles deportivos está dirigido?",
    answer: `Está orientado a deportistas de todas las disciplinas (fútbol, tenis, básquet, hockey, atletismo, rugby, artes marciales, deportes de motor, etc.) tanto a nivel profesional, de alto rendimiento, etapas formativas/juveniles con proyección competitiva y deportistas amateur que buscan superarse de forma integral.`,
  },
];
