import type { Locale } from "./config";

export type ThanksMessages = {
  meta: { title: string; description: string };
  heading: string;
  countdown: string;
};

export const thanks: Record<Locale, ThanksMessages> = {
  "pt-BR": {
    meta: {
      title: "Ottavada: Obrigado",
      description: "Obrigado pelo interesse no Ottavada.",
    },
    heading: "Obrigado pelo interesse na ferramenta!",
    countdown:
      "Você será redirecionado à página inicial em {seconds} segundos...",
  },
  en: {
    meta: {
      title: "Ottavada: Thank You",
      description: "Thank you for your interest in Ottavada.",
    },
    heading: "Thank you for your interest in the tool!",
    countdown: "You will be redirected to the homepage in {seconds} seconds...",
  },
  es: {
    meta: {
      title: "Ottavada: Gracias",
      description: "Gracias por tu interés en Ottavada.",
    },
    heading: "¡Gracias por tu interés en la herramienta!",
    countdown: "Serás redirigido a la página principal en {seconds} segundos...",
  },
  fr: {
    meta: {
      title: "Ottavada: Merci",
      description: "Merci de votre intérêt pour Ottavada.",
    },
    heading: "Merci de votre intérêt pour l\u2019outil\u00a0!",
    countdown:
      "Vous serez redirigé vers la page d\u2019accueil dans {seconds} secondes...",
  },
  it: {
    meta: {
      title: "Ottavada: Grazie",
      description: "Grazie per il tuo interesse in Ottavada.",
    },
    heading: "Grazie per il tuo interesse nello strumento!",
    countdown: "Sarai reindirizzato alla home page tra {seconds} secondi...",
  },
  de: {
    meta: {
      title: "Ottavada: Vielen Dank",
      description: "Vielen Dank für Ihr Interesse an Ottavada.",
    },
    heading: "Vielen Dank für Ihr Interesse an dem Tool!",
    countdown: "Sie werden in {seconds} Sekunden zur Startseite weitergeleitet...",
  },
};
