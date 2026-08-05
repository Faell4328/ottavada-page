import type { Locale } from "./config";

export type DocsMessages = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  brand: { name: string; tagline: string };
  nav: { topics: string; close: string };
  toc: {
    mensagem: string;
    conceitos: string;
    instalacao: string;
    primeirosPassos: string;
    adicionandoMusica: string;
    enviandoNuvem: string;
    realizandoAlteracoes: string;
    baixando: string;
    suporte: string;
  };
  kicker: string;
  footer: { email: string; dev: string };
};

export const docs: Record<Locale, DocsMessages> = {
  "pt-BR": {
    meta: {
      title: "Documentação: Ottavada",
      description:
        "Documentação oficial do Ottavada. Guias, referência e tutoriais para organizar e sincronizar partituras da sua orquestra.",
      ogTitle: "Documentação: Ottavada",
      ogDescription: "Guias, referência e tutoriais do Ottavada.",
    },
    brand: { name: "Ottavada", tagline: "O seu maestro de partituras" },
    nav: { topics: "Tópicos", close: "Fechar menu" },
    toc: {
      mensagem: "Mensagem do desenvolvedor",
      conceitos: "Conceitos essenciais",
      instalacao: "Instalação",
      primeirosPassos: "Primeiros passos",
      adicionandoMusica: "Adicionando música",
      enviandoNuvem: "Enviando para a nuvem",
      realizandoAlteracoes: "Realizando alterações",
      baixando: "Baixando no computador de ensaio",
      suporte: "Suporte",
    },
    kicker: "Documentação",
    footer: {
      email: "Email de contato: ottavada@hotmail.com",
      dev: "Desenvolvido por Rhafaell (faell4328)",
    },
  },
  en: {
    meta: {
      title: "Documentation: Ottavada",
      description:
        "Official Ottavada documentation. Guides, reference and tutorials to organize and sync your orchestra's sheet music.",
      ogTitle: "Documentation: Ottavada",
      ogDescription: "Ottavada guides, reference and tutorials.",
    },
    brand: { name: "Ottavada", tagline: "Your sheet music conductor" },
    nav: { topics: "Topics", close: "Close menu" },
    toc: {
      mensagem: "Message from the developer",
      conceitos: "Essential concepts",
      instalacao: "Installation",
      primeirosPassos: "First steps",
      adicionandoMusica: "Adding music",
      enviandoNuvem: "Sending to the cloud",
      realizandoAlteracoes: "Making changes",
      baixando: "Downloading on the rehearsal computer",
      suporte: "Support",
    },
    kicker: "Documentation",
    footer: {
      email: "Contact email: ottavada@hotmail.com",
      dev: "Developed by Rhafaell (faell4328)",
    },
  },
  es: {
    meta: {
      title: "Documentación: Ottavada",
      description:
        "Documentación oficial de Ottavada. Guías, referencia y tutoriales para organizar y sincronizar las partituras de tu orquesta.",
      ogTitle: "Documentación: Ottavada",
      ogDescription: "Guías, referencia y tutoriales de Ottavada.",
    },
    brand: { name: "Ottavada", tagline: "Tu director de partituras" },
    nav: { topics: "Temas", close: "Cerrar menú" },
    toc: {
      mensagem: "Mensaje del desarrollador",
      conceitos: "Conceptos esenciales",
      instalacao: "Instalación",
      primeirosPassos: "Primeros pasos",
      adicionandoMusica: "Añadir música",
      enviandoNuvem: "Enviando a la nube",
      realizandoAlteracoes: "Realizando cambios",
      baixando: "Descargando en la computadora de ensayo",
      suporte: "Soporte",
    },
    kicker: "Documentación",
    footer: {
      email: "Email de contacto: ottavada@hotmail.com",
      dev: "Desarrollado por Rhafaell (faell4328)",
    },
  },
  fr: {
    meta: {
      title: "Documentation : Ottavada",
      description:
        "Documentation officielle d’Ottavada. Guides, références et tutoriels pour organiser et synchroniser les partitions de votre orchestre.",
      ogTitle: "Documentation : Ottavada",
      ogDescription: "Guides, références et tutoriels d’Ottavada.",
    },
    brand: { name: "Ottavada", tagline: "Votre chef de partitions" },
    nav: { topics: "Sujets", close: "Fermer le menu" },
    toc: {
      mensagem: "Message du développeur",
      conceitos: "Concepts essentiels",
      instalacao: "Installation",
      primeirosPassos: "Premiers pas",
      adicionandoMusica: "Ajouter un morceau",
      enviandoNuvem: "Envoi vers le cloud",
      realizandoAlteracoes: "Effectuer des modifications",
      baixando: "Téléchargement sur l’ordinateur de répétition",
      suporte: "Support",
    },
    kicker: "Documentation",
    footer: {
      email: "Email de contact : ottavada@hotmail.com",
      dev: "Développé par Rhafaell (faell4328)",
    },
  },
  it: {
    meta: {
      title: "Documentazione: Ottavada",
      description:
        "Documentazione ufficiale di Ottavada. Guide, riferimenti e tutorial per organizzare e sincronizzare gli spartiti della tua orchestra.",
      ogTitle: "Documentazione: Ottavada",
      ogDescription: "Guide, riferimenti e tutorial di Ottavada.",
    },
    brand: { name: "Ottavada", tagline: "Il tuo direttore di spartiti" },
    nav: { topics: "Argomenti", close: "Chiudi menu" },
    toc: {
      mensagem: "Messaggio dello sviluppatore",
      conceitos: "Concetti essenziali",
      instalacao: "Installazione",
      primeirosPassos: "Primi passi",
      adicionandoMusica: "Aggiungere musica",
      enviandoNuvem: "Invio al cloud",
      realizandoAlteracoes: "Apportare modifiche",
      baixando: "Download sul computer delle prove",
      suporte: "Supporto",
    },
    kicker: "Documentazione",
    footer: {
      email: "Email di contatto: ottavada@hotmail.com",
      dev: "Sviluppato da Rhafaell (faell4328)",
    },
  },
  de: {
    meta: {
      title: "Dokumentation: Ottavada",
      description:
        "Offizielle Ottavada-Dokumentation. Anleitungen, Referenzen und Tutorials zum Organisieren und Synchronisieren der Noten Ihres Orchesters.",
      ogTitle: "Dokumentation: Ottavada",
      ogDescription: "Anleitungen, Referenzen und Tutorials zu Ottavada.",
    },
    brand: { name: "Ottavada", tagline: "Ihr Noten-Dirigent" },
    nav: { topics: "Themen", close: "Menü schließen" },
    toc: {
      mensagem: "Nachricht vom Entwickler",
      conceitos: "Grundlegende Konzepte",
      instalacao: "Installation",
      primeirosPassos: "Erste Schritte",
      adicionandoMusica: "Musik hinzufügen",
      enviandoNuvem: "In die Cloud senden",
      realizandoAlteracoes: "Änderungen vornehmen",
      baixando: "Auf dem Proben-Computer herunterladen",
      suporte: "Support",
    },
    kicker: "Dokumentation",
    footer: {
      email: "Kontakt-E-Mail: ottavada@hotmail.com",
      dev: "Entwickelt von Rhafaell (faell4328)",
    },
  },
};
