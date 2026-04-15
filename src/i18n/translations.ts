export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      toggle: 'ES',
    },
    hero: {
      title: "Green Coffee — For the World's Most Discerning Roasters",
      subtitle:
        "Estate-grown specialty lots from Colombia's cloud forest. Limited to 50 partners worldwide.",
      cta: 'Explore Our Coffees',
    },
    intro: {
      body: "After years of learning, evolving, expanding, stumbling, and rebuilding, we've returned to the essence of what makes us who we are. Not what the market asks for. Not what trends dictate. But what we know, deep down, is worth doing.",
      stats: {
        founded: 'Founded',
        altitude: '1,700m altitude',
        families: '200+ farming families',
        varieties: '8 rare varieties',
      },
    },
    estateSection: {
      heading: 'Estate-Grown Coffees',
    },
    connect: {
      name: 'CONNECT',
      body: 'Nature leading, and us following. Fermentations guided by native microorganisms. True to origin. The quiet, steady heartbeat of our farm.',
      tags: ['Estate-Grown', 'Native Fermentation', 'Terroir-Driven'],
    },
    pulse: {
      name: 'PULSE',
      body: 'Alive, bold, and unapologetically curious. Fermentations that push boundaries with control of time, pH and temperature.',
      tags: ['Estate-Grown', 'Bold Fermentation', 'Precision'],
    },
    beat: {
      name: 'BEAT',
      body: 'Coffees crafted for competition. Rare lots. Exceptional precision. Limited releases.',
      tags: ['Estate-Grown', 'Competition Grade', 'Nanolots'],
    },
    collaborativeSection: {
      heading: 'Collaborative Coffees',
    },
    laAmistad: {
      name: 'LA AMISTAD',
      body: 'Together, we built something none of us could have built alone. A tribute to the small-scale coffee-growing families who trusted us when our model was new. 500 bags (35 kg each) produced annually. Forward booking modality.',
      tags: ['Collaborative', '500 bags/year', 'Forward Booking'],
    },
    craftLab: {
      heading: 'CRAFT LAB',
      body: 'Our laboratory of artisanal innovation. Experimental micro-lots available exclusively to our 50 premium partners. Where science meets craft in the pursuit of extraordinary cup profiles.',
      tags: ['Experimental', 'Exclusive', 'Micro-lots'],
    },
    contact: {
      heading: 'Interested in becoming one of our 50 partners?',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      country: 'Country',
      interest: 'Interest',
      message: 'Message',
      interestOptions: ['Connect', 'Pulse', 'Beat', 'La Amistad', 'Craft Lab'],
      submit: 'Send Request',
      selectInterest: 'Select a line...',
    },
    footer: {
      tagline:
        'What started as a passion project became a way of questioning how coffee is grown, processed, and shared.',
      copyright: '© 2026 La Palma y El Tucán',
    },
  },
  es: {
    nav: {
      toggle: 'EN',
    },
    hero: {
      title: 'Café Verde — Para los Tostadores Más Exigentes del Mundo',
      subtitle:
        'Lotes de especialidad cultivados en finca desde el bosque de niebla colombiano. Limitado a 50 socios mundialmente.',
      cta: 'Explora Nuestros Cafés',
    },
    intro: {
      body: 'Después de años aprendiendo, evolucionando, expandiéndonos, tropezando y reconstruyéndonos, hemos vuelto a la esencia de lo que nos hace ser quienes somos. No lo que el mercado pide. No lo que dictan las tendencias. Sino lo que sabemos, en el fondo, vale la pena hacer.',
      stats: {
        founded: 'Fundados',
        altitude: '1,700m de altitud',
        families: '200+ familias caficultoras',
        varieties: '8 variedades raras',
      },
    },
    estateSection: {
      heading: 'Cafés de Finca',
    },
    connect: {
      name: 'CONNECT',
      body: 'La naturaleza lidera, y nosotros seguimos. Fermentaciones guiadas por microorganismos nativos. Fieles al origen. El latido constante y sereno de nuestra finca.',
      tags: ['Cultivado en Finca', 'Fermentación Nativa', 'Terroir'],
    },
    pulse: {
      name: 'PULSE',
      body: 'Vivo, audaz e inquebrantablemente curioso. Fermentaciones que empujan los límites con control de tiempo, pH y temperatura.',
      tags: ['Cultivado en Finca', 'Fermentación Audaz', 'Precisión'],
    },
    beat: {
      name: 'BEAT',
      body: 'Cafés diseñados para competición. Lotes raros. Precisión excepcional. Lanzamientos limitados.',
      tags: ['Cultivado en Finca', 'Grado Competición', 'Nanolotes'],
    },
    collaborativeSection: {
      heading: 'Cafés Colaborativos',
    },
    laAmistad: {
      name: 'LA AMISTAD',
      body: 'Juntos construimos algo que ninguno habría podido construir solo. Un tributo a las familias caficultoras a pequeña escala que confiaron en nosotros cuando nuestro modelo era nuevo. 500 bolsas (35 kg cada una) producidas anualmente. Modalidad de reserva anticipada.',
      tags: ['Colaborativo', '500 bolsas/año', 'Reserva Anticipada'],
    },
    craftLab: {
      heading: 'CRAFT LAB',
      body: 'Nuestro laboratorio de innovación artesanal. Microlotes experimentales disponibles exclusivamente para nuestros 50 socios premium. Donde la ciencia se encuentra con la artesanía en la búsqueda de perfiles de taza extraordinarios.',
      tags: ['Experimental', 'Exclusivo', 'Microlotes'],
    },
    contact: {
      heading: '¿Interesado en ser uno de nuestros 50 socios?',
      name: 'Nombre',
      email: 'Correo electrónico',
      company: 'Empresa',
      country: 'País',
      interest: 'Interés',
      message: 'Mensaje',
      interestOptions: ['Connect', 'Pulse', 'Beat', 'La Amistad', 'Craft Lab'],
      submit: 'Enviar Solicitud',
      selectInterest: 'Selecciona una línea...',
    },
    footer: {
      tagline:
        'Lo que empezó como un proyecto de pasión se convirtió en una forma de cuestionar cómo se cultiva, procesa y comparte el café.',
      copyright: '© 2026 La Palma y El Tucán',
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.es;
