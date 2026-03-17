/**
 * main.js — Portfolio Kylian Berkat
 * JavaScript vanilla ES6+ pour toutes les interactions du site
 * Pas de dependance externe
 */

/* ==========================================================================
   1. TRADUCTIONS (FR / EN / ES)
   ========================================================================== */

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: '\u00C0 propos',
      education: 'Formation',
      experience: 'Parcours',
      skills: 'Comp\u00E9tences',
      future: 'Futur',
      commitments: 'Engagements',
      travel: 'Voyages',
      contact: 'Contact',
      wikipedia: 'Wikipedia',
      downloadCV: 'T\u00E9l\u00E9charger mon CV'
    },
    hero: {
      title: 'Kylian Berkat',
      subtitle: '\u00C9tudiant en BTS NDRC \u2022 Commerce, relation client et digital',
      quote: 'Un profil motiv\u00E9, polyvalent et tourn\u00E9 vers l\u2019\u00E9volution.',
      description: '\u00C9tudiant \u00E0 Marseille, je d\u00E9veloppe mes comp\u00E9tences en relation client, prospection, communication et outils digitaux.',
      cta1: 'Me d\u00E9couvrir',
      cta2: 'T\u00E9l\u00E9charger mon CV',
      cta3: 'Ma page Wikipedia',
      miniCards: [
        { title: 'Bas\u00E9 \u00E0 Marseille', value: 'Profil \u00E9tudiant' },
        { title: 'Focus', value: 'Commerce & digital' }
      ],
      keywords: ['Commerce', 'Relation client', 'Digital']
    },
    about: {
      title: '\u00C0 propos',
      content: 'Je suis un \u00E9tudiant s\u00E9rieux, curieux et impliqu\u00E9, avec une vraie envie de progresser. J\u2019aime les environnements concrets, les projets utiles et les parcours qui allient relation client, communication et digital.',
      note: 'Mon objectif est de poursuivre mes \u00E9tudes dans une formation professionnalisante et exigeante, afin de renforcer mes comp\u00E9tences et construire un parcours solide.',
      qualities: [
        { title: 'Sens du contact', icon: 'users' },
        { title: 'Adaptabilit\u00E9', icon: 'refresh' },
        { title: 'Autonomie', icon: 'target' },
        { title: 'Esprit d\u2019\u00E9quipe', icon: 'heart' },
        { title: 'Motivation', icon: 'zap' },
        { title: 'Curiosit\u00E9', icon: 'search' }
      ]
    },
    education: {
      title: 'Formation',
      items: [
        {
          period: '2024-2026',
          degree: 'BTS NDRC',
          school: 'Marseille',
          description: 'Relation client, n\u00E9gociation, prospection, fid\u00E9lisation et outils digitaux.',
          status: 'En cours'
        },
        {
          period: '2024',
          degree: 'Baccalaur\u00E9at G\u00E9n\u00E9ral',
          school: 'Gignac-la-Nerthe (13)',
          description: 'Sp\u00E9cialit\u00E9s : Math\u00E9matiques, NSI, SES.',
          status: 'Obtenu'
        }
      ]
    },
    experience: {
      title: 'Parcours & Exp\u00E9riences',
      items: [
        {
          period: 'Janv.-F\u00E9vr. 2026',
          duration: '3 semaines',
          role: 'Stagiaire Prospection Digitale / Social Selling',
          company: 'Groupe Etic / La Provence',
          location: 'Marseille',
          description: 'Analyse de la pr\u00E9sence de l\u2019auto-\u00E9cole sur les r\u00E9seaux sociaux et proposition d\u2019am\u00E9liorations adapt\u00E9es \u00E0 la cible.'
        },
        {
          period: 'Nov.-D\u00E9c. 2025',
          duration: '5 semaines',
          role: 'Stagiaire Prospection Commerciale',
          company: 'O2',
          location: 'Marseille',
          description: 'Prospection t\u00E9l\u00E9phonique et terrain, prise de rendez-vous qualifi\u00E9s et suivi client.'
        },
        {
          period: 'Juil.-Ao\u00FBt 2025',
          duration: '1 mois',
          role: 'Agent Service Client',
          company: 'Groupe Etic / La Provence',
          location: 'Marseille',
          description: 'Gestion des appels entrants, r\u00E9clamations, litiges et suivi des dossiers clients.'
        },
        {
          period: '2024',
          duration: 'Stage',
          role: 'Stagiaire Prospection',
          company: 'Patrimoine MS',
          location: 'Marseille',
          description: 'Emailing cibl\u00E9, phoning, d\u00E9tection de leads et reporting commercial.'
        },
        {
          period: '2021',
          duration: 'Stage',
          role: 'Stagiaire Support IT',
          company: 'Conseil D\u00E9partemental 13',
          location: 'Marseille',
          description: 'Configuration de postes, maintenance informatique et support de premier niveau.'
        }
      ]
    },
    skills: {
      title: 'Comp\u00E9tences',
      professional: 'Comp\u00E9tences professionnelles',
      personal: 'Aptitudes personnelles',
      languages: 'Langues',
      proSkills: [
        'N\u00E9gociation & relation client',
        'Prospection',
        'Bureautique & Pack Office',
        'Support informatique',
        'Cr\u00E9ation de contenu',
        'Canva & r\u00E9seaux sociaux'
      ],
      softSkills: ['Esprit d\u2019\u00E9quipe', 'Adaptabilit\u00E9', 'Autonomie', 'Sens du contact', 'Motivation', 'Rigueur'],
      langs: [
        { lang: 'Fran\u00E7ais', level: 'Langue maternelle' },
        { lang: 'Anglais', level: 'Interm\u00E9diaire' },
        { lang: 'Espagnol', level: 'Interm\u00E9diaire' }
      ]
    },
    future: {
      title: 'Futur, projets & ambitions',
      intro: 'Je souhaite poursuivre mes \u00E9tudes dans une formation professionnalisante pour approfondir le commerce, la gestion et le digital, tout en restant proche du terrain.',
      cards: [
        {
          title: '\u00C9tudes vis\u00E9es',
          description: 'Rejoindre une formation sup\u00E9rieure s\u00E9rieuse qui me permette de progresser, de gagner en m\u00E9thode et de d\u00E9velopper une vision plus compl\u00E8te du monde professionnel.'
        },
        {
          title: 'Ce que je veux d\u00E9velopper',
          description: 'Renforcer mes comp\u00E9tences en strat\u00E9gie commerciale, communication, organisation et gestion de projet.'
        },
        {
          title: 'Projet professionnel',
          description: '\u00C9voluer vers un m\u00E9tier o\u00F9 je peux allier relation client, d\u00E9veloppement d\u2019activit\u00E9, communication et responsabilit\u00E9s.'
        }
      ]
    },
    commitments: {
      title: 'Engagements',
      subtitle: 'Des exp\u00E9riences qui refl\u00E8tent mes valeurs et mon implication',
      items: [
        {
          title: 'Les Chats de Marie-H\u00E9l\u00E8ne',
          description: 'Implication autour d\u2019actions associatives li\u00E9es \u00E0 la protection animale.'
        },
        {
          title: 'Tournoi solidaire ELA',
          description: 'Participation \u00E0 l\u2019organisation d\u2019un tournoi de football solidaire pour soutenir ELA.'
        },
        {
          title: 'M\u00E9decins Sans Fronti\u00E8res',
          description: 'Soutien \u00E0 une cause humanitaire en tant que donateur.'
        }
      ]
    },
    travel: {
      title: 'Voyages & ouverture',
      subtitle: 'Des exp\u00E9riences qui nourrissent ma curiosit\u00E9, mon adaptation et mon ouverture au monde.',
      countries: [
        { name: 'Espagne', code: 'ES' },
        { name: 'Angleterre', code: 'GB' },
        { name: 'Alg\u00E9rie', code: 'DZ' },
        { name: 'Maroc', code: 'MA' },
        { name: 'Turquie', code: 'TR' },
        { name: 'Italie', code: 'IT' }
      ]
    },
    contact: {
      title: 'Me retrouver',
      subtitle: 'Je reste disponible pour \u00E9changer \u00E0 propos de mon parcours, de mes candidatures ou d\u2019opportunit\u00E9s de formation.',
      location: 'Marseille 13015',
      email: 'M\u2019envoyer un email',
      linkedin: 'Voir mon LinkedIn',
      downloadCV: 'T\u00E9l\u00E9charger mon CV'
    },
    footer: {
      description: 'Portfolio \u00E9tudiant',
      rights: 'Tous droits r\u00E9serv\u00E9s'
    },
    wiki: {
      back: 'Retour au portfolio',
      title: 'Kylian Berkat',
      subtitle: 'Notice biographique inspir\u00E9e d\u2019une page encyclop\u00E9dique',
      intro: 'est un \u00E9tudiant fran\u00E7ais bas\u00E9 \u00E0 Marseille. Il d\u00E9veloppe un profil polyvalent autour du commerce, de la relation client, de la communication et des outils digitaux.',
      tocTitle: 'Sommaire',
      toc: {
        identity: 'Identit\u00E9',
        education: 'Formation',
        experience: 'Parcours',
        skills: 'Comp\u00E9tences',
        commitments: 'Engagements',
        interests: 'Ouverture'
      },
      infobox: {
        status: '\u00C9tudiant',
        field: 'Commerce, relation client, digital',
        location: 'Marseille, France',
        languages: 'Fran\u00E7ais, anglais, espagnol'
      },
      sections: {
        identity: {
          title: 'Identit\u00E9',
          content: '\u00C9tudiant en BTS NDRC, Kylian Berkat construit un parcours orient\u00E9 vers la relation client, la prospection et la communication digitale.'
        },
        education: {
          title: 'Formation',
          content: 'Il poursuit actuellement un BTS NDRC \u00E0 Marseille apr\u00E8s l\u2019obtention d\u2019un baccalaur\u00E9at g\u00E9n\u00E9ral.'
        },
        experience: {
          title: 'Parcours',
          content: 'Ses exp\u00E9riences lui ont permis d\u2019\u00E9voluer entre prospection commerciale, service client et support informatique.'
        },
        skills: {
          title: 'Comp\u00E9tences',
          content: 'Il d\u00E9veloppe des comp\u00E9tences en commerce, relation client, outils bureautiques, communication et digital.'
        },
        commitments: {
          title: 'Engagements',
          content: 'Il s\u2019implique dans des actions associatives et solidaires, notamment autour d\u2019ELA, de la protection animale et de causes humanitaires.'
        },
        interests: {
          title: 'Ouverture internationale',
          content: 'Ses voyages et son int\u00E9r\u00EAt pour d\u2019autres environnements nourrissent sa curiosit\u00E9 et son adaptabilit\u00E9.'
        }
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Journey',
      skills: 'Skills',
      future: 'Future',
      commitments: 'Commitments',
      travel: 'Travel',
      contact: 'Contact',
      wikipedia: 'Wikipedia',
      downloadCV: 'Download CV'
    },
    hero: {
      title: 'Kylian Berkat',
      subtitle: 'BTS NDRC student \u2022 Commerce, customer relations and digital',
      quote: 'A motivated and versatile profile focused on growth.',
      description: 'Based in Marseille, I develop my skills in customer relations, prospecting, communication and digital tools.',
      cta1: 'Discover',
      cta2: 'Download CV',
      cta3: 'My Wikipedia page',
      miniCards: [
        { title: 'Based in Marseille', value: 'Student profile' },
        { title: 'Focus', value: 'Commerce & digital' }
      ],
      keywords: ['Commerce', 'Customer relations', 'Digital']
    },
    about: {
      title: 'About',
      content: 'I am a serious, curious and committed student with a real desire to improve. I enjoy practical environments, useful projects and paths that combine customer relations, communication and digital.',
      note: 'My goal is to continue my studies in a demanding professional program and build a strong career path.',
      qualities: [
        { title: 'People skills', icon: 'users' },
        { title: 'Adaptability', icon: 'refresh' },
        { title: 'Autonomy', icon: 'target' },
        { title: 'Team spirit', icon: 'heart' },
        { title: 'Motivation', icon: 'zap' },
        { title: 'Curiosity', icon: 'search' }
      ]
    },
    education: {
      title: 'Education',
      items: [
        { period: '2024-2026', degree: 'BTS NDRC', school: 'Marseille', description: 'Customer relations, negotiation, prospecting and digital tools.', status: 'In progress' },
        { period: '2024', degree: 'General Baccalaureate', school: 'Gignac-la-Nerthe (13)', description: 'Majors: Mathematics, NSI, SES.', status: 'Completed' }
      ]
    },
    experience: {
      title: 'Journey & Experience',
      items: [
        { period: 'Jan-Feb 2026', duration: '3 weeks', role: 'Digital Prospecting / Social Selling Intern', company: 'Groupe Etic / La Provence', location: 'Marseille', description: 'Social media presence analysis and improvement proposals.' },
        { period: 'Nov-Dec 2025', duration: '5 weeks', role: 'Commercial Prospecting Intern', company: 'O2', location: 'Marseille', description: 'Phone and field prospecting, qualified appointments and client follow-up.' },
        { period: 'Jul-Aug 2025', duration: '1 month', role: 'Customer Service Agent', company: 'Groupe Etic / La Provence', location: 'Marseille', description: 'Incoming calls, complaints, disputes and client file follow-up.' },
        { period: '2024', duration: 'Internship', role: 'Prospecting Intern', company: 'Patrimoine MS', location: 'Marseille', description: 'Email campaigns, calls, lead detection and commercial reporting.' },
        { period: '2021', duration: 'Internship', role: 'IT Support Intern', company: 'Conseil D\u00E9partemental 13', location: 'Marseille', description: 'PC setup, maintenance and first-level support.' }
      ]
    },
    skills: {
      title: 'Skills',
      professional: 'Professional skills',
      personal: 'Personal strengths',
      languages: 'Languages',
      proSkills: ['Customer relations', 'Prospecting', 'Office tools', 'IT support', 'Content creation', 'Social media'],
      softSkills: ['Team spirit', 'Adaptability', 'Autonomy', 'People skills', 'Motivation', 'Discipline'],
      langs: [
        { lang: 'French', level: 'Native' },
        { lang: 'English', level: 'Intermediate' },
        { lang: 'Spanish', level: 'Intermediate' }
      ]
    },
    future: {
      title: 'Future, projects & ambitions',
      intro: 'I want to continue my studies in a professional program focused on commerce, management and digital skills.',
      cards: [
        { title: 'Studies', description: 'Join a serious higher education program and keep progressing through concrete learning.' },
        { title: 'Skills to build', description: 'Strengthen strategy, communication, organization and project skills.' },
        { title: 'Career goal', description: 'Move toward a role combining customer relations, business development and responsibilities.' }
      ]
    },
    commitments: {
      title: 'Commitments',
      subtitle: 'Experiences that reflect my values and involvement',
      items: [
        { title: 'Les Chats de Marie-H\u00E9l\u00E8ne', description: 'Support for animal welfare actions.' },
        { title: 'ELA solidarity tournament', description: 'Participation in a football charity event.' },
        { title: 'Doctors Without Borders', description: 'Support as a donor.' }
      ]
    },
    travel: {
      title: 'Travel & openness',
      subtitle: 'Experiences that strengthen curiosity, adaptability and openness.',
      countries: [
        { name: 'Spain', code: 'ES' },
        { name: 'England', code: 'GB' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Italy', code: 'IT' }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'I am available to discuss my background, applications or future academic opportunities.',
      location: 'Marseille 13015',
      email: 'Send me an email',
      linkedin: 'See my LinkedIn',
      downloadCV: 'Download CV'
    },
    footer: {
      description: 'Student portfolio',
      rights: 'All rights reserved'
    },
    wiki: {
      back: 'Back to portfolio',
      title: 'Kylian Berkat',
      subtitle: 'Biography inspired by an encyclopedia page',
      intro: 'is a French student based in Marseille with a profile focused on commerce, customer relations and digital tools.',
      tocTitle: 'Contents',
      toc: { identity: 'Identity', education: 'Education', experience: 'Journey', skills: 'Skills', commitments: 'Commitments', interests: 'Openness' },
      infobox: { status: 'Student', field: 'Commerce, customer relations, digital', location: 'Marseille, France', languages: 'French, English, Spanish' },
      sections: {
        identity: { title: 'Identity', content: 'BTS NDRC student building a path focused on customer relations, prospecting and digital communication.' },
        education: { title: 'Education', content: 'Currently studying BTS NDRC after obtaining a general baccalaureate.' },
        experience: { title: 'Journey', content: 'Experience in prospecting, customer service and IT support.' },
        skills: { title: 'Skills', content: 'Skills in commerce, customer relations, office tools, communication and digital.' },
        commitments: { title: 'Commitments', content: 'Involved in community and solidarity actions.' },
        interests: { title: 'International openness', content: 'Travel and curiosity for different environments strengthen adaptability.' }
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre m\u00ED',
      education: 'Formaci\u00F3n',
      experience: 'Recorrido',
      skills: 'Competencias',
      future: 'Futuro',
      commitments: 'Compromisos',
      travel: 'Viajes',
      contact: 'Contacto',
      wikipedia: 'Wikipedia',
      downloadCV: 'Descargar CV'
    },
    hero: {
      title: 'Kylian Berkat',
      subtitle: 'Estudiante de BTS NDRC \u2022 Comercio, relaci\u00F3n con clientes y digital',
      quote: 'Un perfil motivado, vers\u00E1til y orientado a la evoluci\u00F3n.',
      description: 'Estudiante en Marsella, desarrollo competencias en relaci\u00F3n con clientes, prospecci\u00F3n, comunicaci\u00F3n y herramientas digitales.',
      cta1: 'Descubrir',
      cta2: 'Descargar CV',
      cta3: 'Mi p\u00E1gina Wikipedia',
      miniCards: [
        { title: 'Basado en Marsella', value: 'Perfil estudiante' },
        { title: 'Enfoque', value: 'Comercio y digital' }
      ],
      keywords: ['Comercio', 'Relaci\u00F3n con clientes', 'Digital']
    },
    about: {
      title: 'Sobre m\u00ED',
      content: 'Soy un estudiante serio, curioso e implicado, con un verdadero deseo de progresar. Me interesan los entornos concretos, los proyectos \u00FAtiles y los recorridos que unen relaci\u00F3n con clientes, comunicaci\u00F3n y digital.',
      note: 'Mi objetivo es continuar mis estudios en una formaci\u00F3n profesional exigente y construir un recorrido s\u00F3lido.',
      qualities: [
        { title: 'Contacto humano', icon: 'users' },
        { title: 'Adaptabilidad', icon: 'refresh' },
        { title: 'Autonom\u00EDa', icon: 'target' },
        { title: 'Esp\u00EDritu de equipo', icon: 'heart' },
        { title: 'Motivaci\u00F3n', icon: 'zap' },
        { title: 'Curiosidad', icon: 'search' }
      ]
    },
    education: {
      title: 'Formaci\u00F3n',
      items: [
        { period: '2024-2026', degree: 'BTS NDRC', school: 'Marsella', description: 'Relaci\u00F3n con clientes, negociaci\u00F3n, prospecci\u00F3n y herramientas digitales.', status: 'En curso' },
        { period: '2024', degree: 'Bachillerato General', school: 'Gignac-la-Nerthe (13)', description: 'Especialidades: Matem\u00E1ticas, NSI, SES.', status: 'Obtenido' }
      ]
    },
    experience: {
      title: 'Recorrido y experiencia',
      items: [
        { period: 'Ene-Feb 2026', duration: '3 semanas', role: 'Practicante en prospecci\u00F3n digital / social selling', company: 'Groupe Etic / La Provence', location: 'Marsella', description: 'An\u00E1lisis de presencia en redes sociales y propuestas de mejora.' },
        { period: 'Nov-Dic 2025', duration: '5 semanas', role: 'Practicante en prospecci\u00F3n comercial', company: 'O2', location: 'Marsella', description: 'Prospecci\u00F3n telef\u00F3nica y de campo, citas cualificadas y seguimiento.' },
        { period: 'Jul-Ago 2025', duration: '1 mes', role: 'Agente de servicio al cliente', company: 'Groupe Etic / La Provence', location: 'Marsella', description: 'Llamadas entrantes, reclamaciones, litigios y seguimiento de clientes.' },
        { period: '2024', duration: 'Pr\u00E1ctica', role: 'Practicante en prospecci\u00F3n', company: 'Patrimoine MS', location: 'Marsella', description: 'Emailing, llamadas, leads y reporting comercial.' },
        { period: '2021', duration: 'Pr\u00E1ctica', role: 'Practicante soporte IT', company: 'Conseil D\u00E9partemental 13', location: 'Marsella', description: 'Configuraci\u00F3n de puestos, mantenimiento y soporte.' }
      ]
    },
    skills: {
      title: 'Competencias',
      professional: 'Competencias profesionales',
      personal: 'Aptitudes personales',
      languages: 'Idiomas',
      proSkills: ['Relaci\u00F3n con clientes', 'Prospecci\u00F3n', 'Herramientas ofim\u00E1ticas', 'Soporte IT', 'Creaci\u00F3n de contenido', 'Redes sociales'],
      softSkills: ['Esp\u00EDritu de equipo', 'Adaptabilidad', 'Autonom\u00EDa', 'Contacto humano', 'Motivaci\u00F3n', 'Rigor'],
      langs: [
        { lang: 'Franc\u00E9s', level: 'Lengua materna' },
        { lang: 'Ingl\u00E9s', level: 'Intermedio' },
        { lang: 'Espa\u00F1ol', level: 'Intermedio' }
      ]
    },
    future: {
      title: 'Futuro, proyectos y ambiciones',
      intro: 'Quiero continuar mis estudios en una formaci\u00F3n profesional centrada en comercio, gesti\u00F3n y digital.',
      cards: [
        { title: 'Estudios', description: 'Integrar una formaci\u00F3n superior seria y seguir avanzando con aprendizaje concreto.' },
        { title: 'Competencias a reforzar', description: 'Desarrollar estrategia, comunicaci\u00F3n, organizaci\u00F3n y gesti\u00F3n de proyectos.' },
        { title: 'Proyecto profesional', description: 'Avanzar hacia un puesto que combine relaci\u00F3n con clientes, desarrollo y responsabilidades.' }
      ]
    },
    commitments: {
      title: 'Compromisos',
      subtitle: 'Experiencias que reflejan mis valores y mi implicaci\u00F3n',
      items: [
        { title: 'Les Chats de Marie-H\u00E9l\u00E8ne', description: 'Apoyo a acciones de protecci\u00F3n animal.' },
        { title: 'Torneo solidario ELA', description: 'Participaci\u00F3n en un evento ben\u00E9fico de f\u00FAtbol.' },
        { title: 'M\u00E9dicos Sin Fronteras', description: 'Apoyo como donante.' }
      ]
    },
    travel: {
      title: 'Viajes y apertura',
      subtitle: 'Experiencias que fortalecen curiosidad, adaptaci\u00F3n y apertura.',
      countries: [
        { name: 'Espa\u00F1a', code: 'ES' },
        { name: 'Inglaterra', code: 'GB' },
        { name: 'Argelia', code: 'DZ' },
        { name: 'Marruecos', code: 'MA' },
        { name: 'Turqu\u00EDa', code: 'TR' },
        { name: 'Italia', code: 'IT' }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estoy disponible para hablar sobre mi recorrido, mis candidaturas y futuras oportunidades de formaci\u00F3n.',
      location: 'Marsella 13015',
      email: 'Enviarme un email',
      linkedin: 'Ver mi LinkedIn',
      downloadCV: 'Descargar CV'
    },
    footer: {
      description: 'Portfolio estudiantil',
      rights: 'Todos los derechos reservados'
    },
    wiki: {
      back: 'Volver al portfolio',
      title: 'Kylian Berkat',
      subtitle: 'Biograf\u00EDa inspirada en una p\u00E1gina enciclop\u00E9dica',
      intro: 'es un estudiante franc\u00E9s con sede en Marsella y un perfil orientado al comercio, la relaci\u00F3n con clientes y lo digital.',
      tocTitle: 'Contenido',
      toc: { identity: 'Identidad', education: 'Formaci\u00F3n', experience: 'Recorrido', skills: 'Competencias', commitments: 'Compromisos', interests: 'Apertura' },
      infobox: { status: 'Estudiante', field: 'Comercio, relaci\u00F3n con clientes, digital', location: 'Marsella, Francia', languages: 'Franc\u00E9s, ingl\u00E9s, espa\u00F1ol' },
      sections: {
        identity: { title: 'Identidad', content: 'Estudiante de BTS NDRC con un recorrido centrado en relaci\u00F3n con clientes, prospecci\u00F3n y comunicaci\u00F3n digital.' },
        education: { title: 'Formaci\u00F3n', content: 'Actualmente cursa BTS NDRC tras obtener un bachillerato general.' },
        experience: { title: 'Recorrido', content: 'Experiencia en prospecci\u00F3n, servicio al cliente y soporte IT.' },
        skills: { title: 'Competencias', content: 'Competencias en comercio, relaci\u00F3n con clientes, herramientas ofim\u00E1ticas, comunicaci\u00F3n y digital.' },
        commitments: { title: 'Compromisos', content: 'Participaci\u00F3n en acciones solidarias y asociativas.' },
        interests: { title: 'Apertura internacional', content: 'Los viajes y la curiosidad por otros entornos refuerzan su adaptabilidad.' }
      }
    }
  }
};

/* ==========================================================================
   2. VARIABLES GLOBALES
   ========================================================================== */

let currentLang = 'fr';
const NAVBAR_OFFSET = 80;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   3. SYSTEME I18N
   ========================================================================== */

/**
 * Accede a une valeur imbriquee dans un objet via une cle a points
 * Ex: getNestedValue(obj, 'hero.title') => obj.hero.title
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc === null || acc === undefined) return null;
    return acc[key] !== undefined ? acc[key] : null;
  }, obj);
}

/**
 * Met a jour tous les elements ayant un attribut data-i18n
 * Exclut le logo navbar qui ne doit pas etre traduit
 */
function updateTranslations(t) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    // Ne pas modifier le logo "KB"
    if (el.classList.contains('navbar__logo')) return;

    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== null && typeof value === 'string') {
      el.textContent = value;
    }
  });

  // Mettre a jour les noms de pays (attribut data-i18n-name)
  document.querySelectorAll('[data-i18n-name]').forEach(el => {
    const key = el.getAttribute('data-i18n-name');
    const value = getNestedValue(t, key);
    if (value !== null && typeof value === 'string') {
      const nameEl = el.querySelector('.travel__country-name');
      if (nameEl) nameEl.textContent = value;
    }
  });
}

/**
 * Fonction principale de changement de langue
 */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  // Mettre a jour l'attribut lang du document
  document.documentElement.lang = lang;

  // Mettre a jour tous les textes traduits
  updateTranslations(t);

  // Mettre a jour l'etat actif des boutons de langue
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Sauvegarder en localStorage
  try {
    localStorage.setItem('language', lang);
  } catch (e) {
    // Silencieux si localStorage non disponible
  }
}

/**
 * Charger la langue sauvegardee ou utiliser le francais par defaut
 */
function loadSavedLanguage() {
  try {
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) {
      currentLang = saved;
    }
  } catch (e) {
    // Silencieux
  }
  setLanguage(currentLang);
}

/* ==========================================================================
   4. NAVIGATION MOBILE
   ========================================================================== */

function initMobileMenu() {
  const burger = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!burger || !mobileMenu) return;

  const menuIcon = burger.querySelector('.icon--menu');
  const closeIcon = burger.querySelector('.icon--close');

  function toggleMenu(open) {
    const isOpen = typeof open === 'boolean' ? open : mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', !isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    if (menuIcon) menuIcon.classList.toggle('hidden', isOpen);
    if (closeIcon) closeIcon.classList.toggle('hidden', !isOpen);
  }

  // Toggle du menu au clic sur le burger
  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fermer quand on clique un lien dans le menu mobile
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Fermer quand on clique en dehors du menu
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(e.target) &&
        !burger.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   5. SMOOTH SCROLL
   ========================================================================== */

function initSmoothScroll() {
  // Gerer les liens navbar desktop et mobile qui pointent vers des ancres (#section)
  const allNavLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link, .hero__ctas .btn');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  // Lien du logo "KB" vers le haut
  const logo = document.querySelector('.navbar__logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }
}

/* ==========================================================================
   6. ANIMATIONS AU SCROLL (IntersectionObserver)
   ========================================================================== */

function initScrollAnimations() {
  // Ne pas animer si l'utilisateur prefere les mouvements reduits
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-section]').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observer toutes les sections et les cartes
  document.querySelectorAll(
    '[data-section], .education__card, .experience__card, .skills__card, ' +
    '.future__card, .commitments__card, .travel__country, .about__quality-card, ' +
    '.contact__info-card'
  ).forEach(el => observer.observe(el));
}

/* ==========================================================================
   7. NAVIGATION ACTIVE STATE
   ========================================================================== */

function initActiveNavState() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === '#' + id);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: `-${NAVBAR_OFFSET}px 0px -40% 0px`
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   8. NAVBAR AU SCROLL (fond transparent -> solid)
   ========================================================================== */

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Etat initial au chargement
  handleScroll();
}

/* ==========================================================================
   9. SELECTEUR DE LANGUE
   ========================================================================== */

function initLanguageSelector() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && translations[lang]) {
        setLanguage(lang);
      }
    });
  });
}

/* ==========================================================================
   10. ANNEE DYNAMIQUE FOOTER
   ========================================================================== */

function initDynamicYear() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. INITIALISATION AU CHARGEMENT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Charger la langue sauvegardee et appliquer toutes les traductions
  loadSavedLanguage();

  // Initialiser toutes les fonctionnalites
  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  initActiveNavState();
  initLanguageSelector();
  initDynamicYear();

  // Lancer les animations au scroll
  initScrollAnimations();
});
