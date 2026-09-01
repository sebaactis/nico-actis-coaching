import { Certification, Testimonial, FAQItem, MethodStep } from '../types';

export const COACH_INFO = {
  name: "Nico Actis",
  title: "Coach Ontológico & Deportivo de Alto Rendimiento",
  headline: "POTENCIÁ TU MENTE. ELEVÁ TU RENDIMIENTO.",
  subheadline: "Acompañamiento integral para deportistas profesionales y de alto rendimiento. Porque antes que deportistas, somos personas.",
  phone: "+54 9 11 1234-5678",
  whatsappNumber: "5491112345678",
  instagram: "nicoactis.coach",
  instagramUrl: "https://instagram.com/nicoactis.coach",
  email: "contacto@nicoactis.com",
  location: "Sesiones Online (Global) & Presenciales",
  motto: "El deportista puede ser quien compite, pero la persona es quien vive todo el proceso.",
  stats: [
    { value: "+10", label: "Certificaciones Internacionales", sublabel: "ICF, AACOP, Barça Hub" },
    { value: "100%", label: "Proceso Personalizado", sublabel: "Adaptado a tu calendario competitivo" },
    { value: "1 a 1", label: "Sesiones Online & Presencial", sublabel: "Acompañamiento continuo semana a semana" },
    { value: "+15", label: "Futbolistas Profesionales", sublabel: "En Primera División y alto rendimiento" },
  ]
};

export const ABOUT_DATA = {
  intro: "Soy Nico Actis",
  role: "Coach Ontológico Profesional & Coach Deportivo",
  missionTitle: "Mi Misión",
  missionSummary: "Mi misión es acompañar a los deportistas en su camino, no solo para potenciar su rendimiento, sino también para ayudarlos a crecer como personas.",
  paragraphs: [
    "Porque antes que deportistas, somos personas. Y todo lo que vivimos fuera del campo, la cancha o la pista también influye en nuestra manera de competir, entrenar y afrontar los desafíos.",
    "Por eso, mi acompañamiento busca trabajar de manera integral: fortalecer recursos mentales y emocionales, afrontar dificultades, gestionar las emociones, superar obstáculos y desarrollar herramientas que permitan al deportista desenvolverse con mayor confianza y equilibrio, tanto en el deporte como en su vida personal.",
    "Creo que el verdadero crecimiento no consiste únicamente en conseguir mejores resultados, sino en convertirse en una persona más preparada para afrontar los desafíos que el deporte y la vida presentan.",
    "Mi compromiso es acompañar a cada deportista respetando su historia, sus tiempos y sus objetivos, entendiendo que detrás de cada rendimiento hay una persona con emociones, sueños, miedos, fortalezas y desafíos."
  ],
  highlightQuote: "Porque el deportista puede ser quien compite, pero la persona es quien vive todo el proceso.",
  pillars: [
    {
      title: "Gestión Emocional & Mental",
      description: "Herramientas para canalizar la presión, el miedo al error, la frustración y la ansiedad pre-competitiva.",
      icon: "Brain"
    },
    {
      title: "Autoconocimiento y Hábitos",
      description: "Identificar qué necesitás y construir rutinas saludables que sostengan tu nivel en el tiempo.",
      icon: "Compass"
    },
    {
      title: "Confianza & Liderazgo",
      description: "Valorar tu recorrido, fortalecer tu autoestima y establecer límites sanos en tu entorno deportivo y personal.",
      icon: "ShieldCheck"
    },
    {
      title: "Transferencia al Campo",
      description: "Ejercicios concretos durante la semana para plasmar los avances internos en resultados deportivos reales.",
      icon: "Trophy"
    }
  ]
};

export const METHODOLOGY_DATA: MethodStep[] = [
  {
    number: "01",
    title: "Diagnóstico & Planificación Integral",
    subtitle: "Sesiones Online o Presenciales",
    description: "Espacios de conversación profunda donde abordamos tanto los desafíos dentro del campo de juego como los aspectos personales que influyen en tu bienestar.",
    details: [
      "Planificación de objetivos anuales, de temporada y semanales",
      "Identificación de bloqueos, creencias limitantes y patrones de conducta",
      "Diseño de un plan de trabajo 100% individualizado"
    ],
    iconName: "Target"
  },
  {
    number: "02",
    title: "Conocete, Comprendete y Construí Hábitos",
    subtitle: "La base de los cambios sostenibles",
    description: "El autoconocimiento es el punto de partida. Te acompaño a identificar qué necesitás, qué te hace bien y qué querés transformar para incorporar hábitos saludables en sintonía con tus valores.",
    details: [
      "Alineación entre valores personales y metas deportivas",
      "Incorporación de rutinas de descanso, concentración y foco",
      "Estrategias para sostener la disciplina sin caer en el desgaste mental"
    ],
    iconName: "Flame"
  },
  {
    number: "03",
    title: "Reconocé tu Valor y Mejorá tus Vínculos",
    subtitle: "Confianza, comunicación y entorno",
    description: "Aprendé a mirarte con mayor confianza y reconocimiento, valorando tu recorrido y capacidades. Trabajá en el establecimiento de límites y construí vínculos conscientes.",
    details: [
      "Fortalecimiento de la autoimagen y seguridad competitiva",
      "Comunicación asertiva con entrenadores, compañeros y cuerpo técnico",
      "Gestión de relaciones y entorno del deportista de élite"
    ],
    iconName: "Users"
  },
  {
    number: "04",
    title: "Ejercicios Semanales & Enfoque Competitivo",
    subtitle: "Llevar la versión mejorada a la cancha",
    description: "Realizamos ejercicios y tareas prácticas durante la semana para que la persona detrás del deportista evolucione día a día y traslade esa fortaleza a la competencia.",
    details: [
      "Técnicas de reprogramación y respiración bajo presión",
      "Seguimiento continuo pre y post partidos / torneos",
      "Evaluación y ajuste constante del plan estratégico"
    ],
    iconName: "Activity"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "icf",
    title: "Coach Ontológico Profesional",
    institution: "International Coach Federation (ICF)",
    category: "icf_aacop",
    badgeLabel: "Certificación Internacional",
    description: "Formación de máximo estándar global en procesos de acompañamiento ontológico y transformación personal."
  },
  {
    id: "aacop",
    title: "Coach Deportivo",
    institution: "Activación X — Avalado por AACOP",
    category: "icf_aacop",
    badgeLabel: "Aval Nacional",
    description: "Especialización en dinámica deportiva, liderazgo en equipos y rendimiento atlético de alto nivel."
  },
  {
    id: "ciemec-1",
    title: "Clínica de Emociones en el Deporte",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Gestión Emocional",
    description: "Abordaje especializado en la regulación de la frustración, el miedo al fallo y la euforia en competencia."
  },
  {
    id: "ciemec-2",
    title: "Métodos de Concentración y Mentality",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Foco & Concentración",
    description: "Desarrollo del estado de 'Flow' y técnicas de atención focalizada en momentos de máxima exigencia."
  },
  {
    id: "ciemec-3",
    title: "Neurociencia Educativa Aplicada al Deporte",
    institution: "CIEMEC",
    category: "neuroscience",
    badgeLabel: "Neurociencia",
    description: "Comprensión del funcionamiento cerebral y circuitos de aprendizaje motor y toma de decisiones rápida."
  },
  {
    id: "neuro-crecimiento",
    title: "Inteligencia Emocional para el Crecimiento Personal",
    institution: "Especialización Avanzada",
    category: "neuroscience",
    badgeLabel: "Desarrollo Humano",
    description: "Capacidades intrapersonales e interpersonales para la resiliencia y el bienestar integral."
  },
  {
    id: "quimica-cerebro",
    title: "La Química del Cerebro: Neurociencia en la Vida Diaria",
    institution: "Curso de Especialización 2023",
    category: "neuroscience",
    year: "2023",
    badgeLabel: "Neuroquímica",
    description: "Neurotransmisores (dopamina, cortisol, adrenalina) aplicados al manejo del estrés y la motivación."
  },
  {
    id: "barca-1",
    title: "Variables Psicológicas y Rendimiento Deportivo",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description: "Estudio de las variables determinantes en el rendimiento atlético de clase mundial."
  },
  {
    id: "barca-2",
    title: "Técnicas de Intervención Psicológicas",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description: "Estrategias de intervención aplicadas al deportista en fases de entrenamiento y competencia."
  },
  {
    id: "barca-3",
    title: "Contextualización del Entorno del Deportista de Élite",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description: "Comprensión integral de las presiones mediáticas, contractuales y familiares en el alto rendimiento."
  },
  {
    id: "barca-4",
    title: "La Vida del Deportista de Élite",
    institution: "Universidad de Barcelona — Barça Innovation Hub",
    category: "barca",
    badgeLabel: "Barça Hub",
    description: "Análisis biopsicosocial de las demandas y desafíos que atraviesan los atletas profesionales."
  },
  {
    id: "reprogramacion",
    title: "Reprogramación de Pensamientos y Emociones Tóxicas",
    institution: "Entrenamiento Especializado",
    category: "cognitive",
    badgeLabel: "Mente Fuerte",
    description: "Eliminación de diálogo interno destructivo y reestructuración de esquemas mentales automáticos."
  },
  {
    id: "tcc",
    title: "Certificación en Técnicas Cognitivo Conductuales",
    institution: "Formación Clínica Aplicada",
    category: "cognitive",
    badgeLabel: "TCC",
    description: "Herramientas basadas en evidencia para la modificación de hábitos y patrones de conducta limitantes."
  },
  {
    id: "ansiedad-itcc",
    title: "Tratamiento de Trastornos de Ansiedad, Pánico y Fobias",
    institution: "ITCC (Instituto de Terapia Cognitivo Conductual)",
    category: "cognitive",
    badgeLabel: "ITCC Certificado",
    description: "Estrategias específicas para superar bloqueos de pánico, ansiedad de ejecución y estrés agudo."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "tomas-cuello",
    name: "Tomás Cuello",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Primera División & Torneos Internacionales",
    image: "/images/Tomas_Cuello.jpeg",
    isFeatured: true,
    highlight: "Alto Rendimiento & Competencia Internacional",
    quote: "El acompañamiento mental y emocional con Nico me dio una claridad enorme para afrontar la exigencia y la presión en la alta competencia. Trabajar la mentalidad y la tranquilidad personal marca una diferencia real en la cancha.",
    stats: [
      { label: "Nivel", value: "Primera División Internacional" },
      { label: "Enfoque", value: "Gestión de Presión & Autoconfianza" },
      { label: "Impacto", value: "Solidez y Enfoque Competitivo" }
    ]
  },
  {
    id: "agustin-ladstatter",
    name: "Agustín Ladstatter",
    sport: "Fútbol Profesional",
    teamOrRole: "Plantel Profesional • Proyección de Élite",
    image: "/images/Agustin_Ladstatter.jpeg",
    isFeatured: true,
    highlight: "Confianza & Proyección Competitiva",
    quote: "Aprender a gestionar los momentos difíciles, la ansiedad previa a los partidos y sostener el foco en mi juego cambió mi confianza y mi solidez dentro del campo.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Manejo de Ansiedad & Seguridad" },
      { label: "Impacto", value: "Crecimiento y Madurez Deportiva" }
    ]
  },
  {
    id: "benjamin-sagues-barreiro",
    name: "Benjamín Sagüés Barreiro",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Alta Competencia",
    image: "/images/Benjamin_Sagues_Barreiro.jpeg",
    isFeatured: true,
    highlight: "Mentalidad Ganadora & Regularidad",
    quote: "El trabajo integral en la persona detrás del jugador es lo que te permite sostener el nivel semana tras semana y no dejarte condicionar por las presiones externas.",
    stats: [
      { label: "Nivel", value: "Competencia Profesional" },
      { label: "Enfoque", value: "Resiliencia & Constancia" },
      { label: "Impacto", value: "Regularidad en Alto Nivel" }
    ]
  },
  {
    id: "eber-ocampo",
    name: "Eber Ocampo",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Plantel Superior",
    image: "/images/Eber_Ocampo.jpeg",
    isFeatured: true,
    highlight: "Foco, Concentración & Estado de Flow",
    quote: "Con Nico encontré herramientas para superar bloqueos, mejorar la concentración en los momentos duros de los partidos y disfrutar mucho más del camino competitivo.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Concentración Bajo Presión" },
      { label: "Impacto", value: "Mayor Claridad y Efectividad" }
    ]
  },
  {
    id: "felipe-tempone",
    name: "Felipe Tempone",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Desarrollo Integral",
    image: "/images/Felipe_Tempone.jpeg",
    isFeatured: true,
    highlight: "Planificación de Objetivos & Hábitos",
    quote: "Las sesiones me ayudaron a ordenar mi cabeza, fijar objetivos claros para la temporada y mantener la disciplina y motivación al 100% día a día.",
    stats: [
      { label: "Nivel", value: "Desarrollo y Rendimiento" },
      { label: "Enfoque", value: "Hábitos Saludables & Disciplina" },
      { label: "Impacto", value: "Evolución Deportiva Constante" }
    ]
  },
  {
    id: "francisco-scarpeccio",
    name: "Francisco Scarpeccio",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Competencia de Alto Nivel",
    image: "/images/Francisco_Scarpeccio.jpeg",
    isFeatured: true,
    highlight: "Canalización de la Presión Competitiva",
    quote: "Entendí cómo transformar la presión y los nervios en energía positiva para rendir mejor en cada partido y tener mayor seguridad con la pelota.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Autorregulación Emocional" },
      { label: "Impacto", value: "Seguridad y Determinación" }
    ]
  },
  {
    id: "ignacio-cuello",
    name: "Ignacio Cuello",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Rendimiento Deportivo",
    image: "/images/Ignacio_Cuello.jpeg",
    isFeatured: true,
    highlight: "Autoconocimiento & Hábitos de Élite",
    quote: "El coaching me dio una mirada distinta sobre mis propias capacidades y la importancia del descanso, los pensamientos y los hábitos en el rendimiento del fin de semana.",
    stats: [
      { label: "Nivel", value: "Competencia Profesional" },
      { label: "Enfoque", value: "Autoconocimiento & Rutinas" },
      { label: "Impacto", value: "Óptima Preparación Integral" }
    ]
  },
  {
    id: "juan-villordo",
    name: "Juan Villordo",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Alta Exigencia",
    image: "/images/Juan_Villordo.jpeg",
    isFeatured: true,
    highlight: "Seguridad Mental & Liderazgo",
    quote: "El acompañamiento de Nico fue clave para fortalecer mi seguridad mental en momentos decisivos de la temporada y asumir el protagonismo con confianza.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Seguridad & Carácter" },
      { label: "Impacto", value: "Liderazgo en el Campo" }
    ]
  },
  {
    id: "kevin-londono",
    name: "Kevin Londoño",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional Internacional",
    image: "/images/Kevin_Londono.jpeg",
    isFeatured: true,
    highlight: "Solidez & Enfoque Internacional",
    quote: "Trabajar la mente y las emociones con Nico me permitió competir con mayor solidez y tranquilidad en cada desafío del fútbol internacional.",
    stats: [
      { label: "Nivel", value: "Primera División Internacional" },
      { label: "Enfoque", value: "Adaptabilidad & Rendimiento" },
      { label: "Impacto", value: "Consistencia en Alta Exigencia" }
    ]
  },
  {
    id: "lautaro-bursich",
    name: "Lautaro Bursich",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Plantel Superior",
    image: "/images/Lautaro_Bursich.jpeg",
    isFeatured: true,
    highlight: "Resiliencia & Fortaleza Mental",
    quote: "Un espacio fundamental para reflexionar, aprender a convivir con el error sin frustrarse y potenciar las fortalezas individuales en cada entrenamiento y partido.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Tolerancia a la Frustración" },
      { label: "Impacto", value: "Mayor Fortaleza Mental" }
    ]
  },
  {
    id: "lucas-ibarra",
    name: "Lucas Ibarra",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Rendimiento Deportivo",
    image: "/images/Lucas_Ibarra.jpeg",
    isFeatured: true,
    highlight: "Toma de Decisiones & Claridad",
    quote: "La claridad en la toma de decisiones y el manejo de los momentos de tensión dentro del campo mejoraron notablemente desde que arrancamos a trabajar.",
    stats: [
      { label: "Nivel", value: "Competencia Profesional" },
      { label: "Enfoque", value: "Toma de Decisiones Rápida" },
      { label: "Impacto", value: "Claridad en Momentos Clave" }
    ]
  },
  {
    id: "rodrigo-dudok",
    name: "Rodrigo Dudok",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Competencia de Élite",
    image: "/images/Rodrigo_Dudok.jpeg",
    isFeatured: true,
    highlight: "Enfoque Profesional & Rendimiento",
    quote: "El respaldo y las herramientas que me brindó Nico marcaron un antes y un después en mi enfoque como deportista profesional.",
    stats: [
      { label: "Disciplina", value: "Fútbol Profesional" },
      { label: "Enfoque", value: "Mentalidad Profesional" },
      { label: "Impacto", value: "Salto de Calidad Competitivo" }
    ]
  },
  {
    id: "tyago-ayala",
    name: "Tyago Ayala",
    sport: "Fútbol Profesional",
    teamOrRole: "Fútbol Profesional • Proyección y Rendimiento",
    image: "/images/Tyago_Ayala.jpeg",
    isFeatured: true,
    highlight: "Evolución & Autoconfianza",
    quote: "Descubrí cómo potenciar mi juego desde el autoconocimiento, la gestión de mis emociones y la confianza en todo lo que vengo trabajando.",
    stats: [
      { label: "Nivel", value: "Proyección & Primera" },
      { label: "Enfoque", value: "Autoconfianza & Crecimiento" },
      { label: "Impacto", value: "Desarrollo Deportivo Integral" }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "que-es-el-coaching",
    question: "¿Qué es el Coaching?",
    answer: `El Coaching Ontológico es un proceso de acompañamiento que busca generar cambios en la manera en que una persona observa, interpreta y se relaciona con su realidad.

Parte de la idea de que no siempre podemos cambiar lo que sucede, pero sí podemos transformar la manera en que lo interpretamos, las emociones desde las que actuamos y las acciones que elegimos llevar adelante.

A través de conversaciones, preguntas y herramientas específicas, el coaching permite identificar creencias, pensamientos y patrones de comportamiento que pueden estar limitando nuestro desarrollo, para abrir nuevas posibilidades y encontrar recursos que nos permitan afrontar los desafíos de una manera diferente.

En el ámbito deportivo, este proceso puede ayudar al deportista a desarrollar una mayor consciencia sobre sí mismo, gestionar sus emociones, fortalecer su confianza, afrontar dificultades y construir nuevas formas de relacionarse con el entrenamiento, la competencia y los resultados.

El objetivo no es decirle al deportista qué tiene que hacer, sino acompañarlo a descubrir nuevas posibilidades para que pueda elegir y actuar de una manera más consciente y efectiva.`
  },
  {
    id: "para-que-son-las-sesiones",
    question: "¿Para qué son las sesiones de Coaching?",
    answer: `Las sesiones de Coaching son un espacio de acompañamiento y reflexión diseñado para que el deportista pueda conocerse mejor, comprender lo que le sucede y encontrar nuevas maneras de afrontar aquello que hoy representa un desafío.

Durante las sesiones trabajamos sobre aquellas situaciones que pueden estar influyendo en su bienestar y en su rendimiento: emociones, pensamientos, confianza, frustración, presión, miedos, toma de decisiones, objetivos, vínculos y diferentes situaciones propias de la vida deportiva y personal.

El objetivo es que el deportista pueda desarrollar una mayor consciencia sobre sí mismo, reconocer sus recursos y descubrir nuevas posibilidades de acción.

Porque muchas veces no se trata de hacer más, sino de aprender a observar de otra manera para poder actuar de una manera diferente.

Las sesiones no buscan cambiar quién es el deportista, sino acompañarlo a descubrir y potenciar los recursos que ya existen en él. Porque cuando trabajamos con la persona, también estamos fortaleciendo al deportista.`
  },
  {
    id: "como-es-la-modalidad",
    question: "¿Cómo es la modalidad de las sesiones (Online o Presencial)?",
    answer: `Trabajo con sesiones tanto en modalidad Online (a través de videollamadas para deportistas de cualquier provincia o país del mundo) como Presenciales. 

La duración promedio de cada encuentro es de 50 a 60 minutos con una frecuencia semanal o quincenal según la etapa de la temporada y las necesidades específicas del atleta. Además, contamos con contacto y tareas prácticas entre semana para acompañar tu calendario de entrenamientos y partidos.`
  },
  {
    id: "a-quien-esta-dirigido",
    question: "¿A qué disciplinas o niveles deportivos está dirigido?",
    answer: `Está orientado a deportistas de todas las disciplinas (fútbol, tenis, básquet, hockey, atletismo, rugby, artes marciales, deportes de motor, etc.) tanto a nivel profesional, de alto rendimiento, etapas formativas/juveniles con proyección competitiva y deportistas amateur que buscan superarse de forma integral.`
  }
];
