import { useLanguage } from '../hooks/useLanguage'
export const translations = {
    es: {
      // Frases
      phases: {
        phase1: 'Desarrollador de software',
        phase2: 'Arquitecto de soluciones',
        phase3: 'Diseñador de experiencias'
      },

      // Navegación
      home: 'Inicio',
      about: 'Sobre mi',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      
      // Botones
      submit: 'Enviar',
      sending: 'Enviando...',
      sent: 'Enviado',
      error: 'Error',
      download: 'Descargar CV',
      downloaded: 'Descargado',
      language: 'ES',
      all: 'Todos',
      web: 'Web',
      mobile: 'Movil',
      videogames: 'Videojuegos',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      
      // Temas
      lightMode: 'Modo Claro',
      darkMode: 'Modo Oscuro',
      
      // Formularios
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      
      // Placeholders
      enterName: 'Ingresa tu nombre',
      enterEmail: 'Ingresa tu correo electrónico',
      enterMessage: 'Ingresa tu mensaje',

      // Contactame
      contactMe: 'Mantengámonos en contacto',

      // Saludo
      hello: 'Hola, soy',

      // Titulo
      tittleAbout: 'Sobre mi',

      // Efecto de éxito del formulario
      formSuccess: '¡Formulario enviado correctamente!',

      // Sobre mi
      aboutDescription: {
        part1: 'Me gusta aprender haciendo',
        part2: ', suelo meterme en retos que me obligan a salir de lo básico.',
        part3: ' Soy ordenado',
        part4: ' con el código que programo y tambien en la vida, siempre',
        part5: ' planeo los desarrollos lo suficiente',
        part6: ', para que me represente de la mejor manera. Además de programar',
        part7: ' tengo formación en metodologías ágiles',
        part8: ', tengo habilidades fuertes en ',
        part9: 'liderazgo y comunicación.',
        part10: ' Estoy en constante crecimiento personal y tecnico, me gusta que se valore las ideas frescas.'
      },

      // Descripciones de proyectos
      projectDescriptions: {
        uniScan: 'Aplicación para visualizar y gestionar horarios de salones por medio de códigos QR.',
        reportApp: 'Aplicación para reportar y gestionar problemas en computadores de salas informáticas.',
        filterProtector: 'Filtro protector de luz azul para telefonos android.',
        paintChat: 'Red social para compartirse dibujos en tiempo real a modo de chat.',
        sketchVibes: 'Plataforma web para exponer dibujos personales.',
        frutasticShoot: 'Juego 2D para el aprender vocabulario sobre frutas por medio de audios.'
      },

      // Descripciones detalladas de proyectos (para la página de proyecto)
      projectDetailDescriptions: {
        uniScan: 'UniScan es una aplicación móvil diseñada para facilitar la consulta de información sobre salones de clase. Utiliza un escáner de códigos QR integrado para identificar el aula y mostrar instantáneamente sus detalles, disponibilidad y horarios asignados. Incluye un módulo para administradores que permite gestionar y actualizar la base de datos de los espacios.',
        reportApp: 'ReportApp es una solución móvil enfocada en la automatización de reportes institucionales o de mantenimiento. Permite a los usuarios llenar formularios detallados que se sincronizan con una base de datos y generan notificaciones automáticas vía correo electrónico (Gmail API). Cuenta con una interfaz dedicada para que los administradores revisen, filtren y gestionen el estado de los reportes recibidos.',
        filterProtector: 'Screen filter es una utilidad desarrollada en Kotlin enfocada en la salud visual del usuario. La aplicación ejecuta un servicio en segundo plano que superpone un filtro de pantalla configurable para bloquear la luz azul, ayudando a reducir la fatiga visual durante el uso nocturno o prolongado del dispositivo.',
        paintChat: 'PaintChat es una red social creativa que combina la mensajería instantánea con el arte digital. Los usuarios pueden crear dibujos a mano alzada y compartirlos en tiempo real con otros usuarios, creando conversaciones visuales únicas. La aplicación utiliza Firebase Realtime Database para sincronizar los dibujos.',
        sketchVibes: 'SketchVibes es una aplicación web robusta desarrollada con PHP puro bajo el patrón de arquitectura Modelo-Vista-Controlador (MVC). Funciona como una red social para artistas, permitiendo el registro de usuarios, inicio de sesión seguro, y un sistema CRUD completo para subir, editar, visualizar y eliminar bocetos o imágenes en una base de datos SQL.',
        frutasticShoot: 'Frutastic Shoot es un juego educativo 2D desarrollado en Unity con C#, diseñado para ayudar a niños y estudiantes a aprender vocabulario sobre frutas en ingles. El jugador debe recoger la fruta que aparece en el mapa y seguido se escuchara un audio de la fruta en ingles, al tiempo debe disparar a los enemigos que lo persiguen, combinando diversión y aprendizaje. Incluye un sistema de puntuación para motivar el progreso.'
      },

      // Detalles del proyecto
      projectDetails: {
        technologies: 'Tecnologías utilizadas',
        features: 'Características',
        viewCode: 'Ver código',
        viewSite: 'Ver sitio'
      },

      // Cerrar modal
      close: 'Cerrar'
    },
    en: {
        // Phases
        phases: {
          phase1: 'Software developer',
          phase2: 'Solutions architect',
          phase3: 'Experience designer'
        },

        // Navigation
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        
        // Botones
        submit: 'Submit',
        sending: 'Sending...',
        sent: 'Sent',
        error: 'Error',
        download: 'Download CV',
        downloaded: 'Downloaded',
        language: 'EN',
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        videogames: 'Videogames',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        
        // Themes
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        
        // Forms
        name: 'Name',
        email: 'Email',
        message: 'Message',
        
        // Placeholders
        enterName: 'Enter your name',
        enterEmail: 'Enter your email',
        enterMessage: 'Enter your message',

        // Hero
        hello: 'Hello, I\'m',

        // Tittle
        tittleAbout: 'About me',

        // Form success effect
        formSuccess: 'Form submitted successfully!',

        // Contact me
        contactMe: 'Let\'s keep in contact',

        // About
        aboutDescription: {
          part1: 'I like to learn by doing',
          part2: ', I tend to get involved in challenges that force me to go beyond the basics.',
          part3: ' I am orderly',
          part4: ' with the code I program and also in life, always',
          part5: ' plan the developments sufficiently',
          part6: ', so that I represent the best way. In addition to programming',
          part7: ' I have training in agile methodologies',
          part8: ', I have strong',
          part9: ' leadership and communication skills.',
          part10: ' I am constantly growing personally and technically, I like to value fresh ideas.'
        },

        // Project descriptions
        projectDescriptions: {
          uniScan: 'Application to view and manage classroom schedules using QR codes.',
          reportApp: 'Application to report and manage issues on computers in computer labs.',
          filterProtector: 'Blue light filter for Android phones.',
          paintChat: 'Social network for sharing drawings in real time as a chat.',
          sketchVibes: 'Web platform for showcasing personal drawings.',
          frutasticShoot: '2D game for learning vocabulary about fruits through audio.'
        },

        // Detailed project descriptions (for project page)
        projectDetailDescriptions: {
          uniScan: 'UniScan is a mobile application designed to facilitate the consultation of classroom information. It uses an integrated QR code scanner to instantly identify the classroom and display its details, availability, and assigned schedules. It includes an admin module that allows managing and updating the database of spaces.',
          reportApp: 'ReportApp is a mobile solution focused on automating institutional or maintenance reports. It allows users to fill out detailed forms that sync with a database and generate automatic notifications via email (Gmail API). It features a dedicated interface for administrators to review, filter, and manage the status of received reports.',
          filterProtector: 'Screen Filter is a utility developed in Kotlin focused on the user\'s visual health. The application runs a background service that overlays a configurable screen filter to block blue light, helping to reduce eye strain during nighttime or prolonged device use.',
          paintChat: 'PaintChat is a creative social network that combines instant messaging with digital art. Users can create freehand drawings and share them in real time with other users, creating unique visual conversations. The application uses Firebase Realtime Database to synchronize the drawings.',
          sketchVibes: 'SketchVibes is a robust web application developed with pure PHP under the Model-View-Controller (MVC) architecture pattern. It functions as a social network for artists, allowing user registration, secure login, and a complete CRUD system to upload, edit, view, and delete sketches or images in an SQL database.',
          frutasticShoot: 'Frutastic Shoot is a 2D educational game developed in Unity with C#, designed to help children and students learn vocabulary about fruits in English. The player must collect the fruit that appears on the map and then an audio of the fruit in English will be played, while also shooting at enemies that chase them, combining fun and learning. It includes a scoring system to motivate progress.'
        },

        // Project details
        projectDetails: {
          technologies: 'Technologies used',
          features: 'Features',
          viewCode: 'View code',
          viewSite: 'View site'
        },

        // Close modal
        close: 'Close'
      }
  }
  
  // Helper function to get translations
  export const t = (key, language = 'es', params = {}) => {
    const keys = key.split('.')
    let translation = translations[language]
    for (const k of keys) {
      translation = translation?.[k]
      if (translation === undefined) return key
    }
    if (typeof translation !== 'string') return key
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match
    })
  }

  // Hook personalized for translations
  export const useTranslation = () => {
    const { language } = useLanguage()
    return {
      t: (key, params = {}) => t(key, language, params),
      language
    }
  }