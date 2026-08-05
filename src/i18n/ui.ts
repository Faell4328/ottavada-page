import type { Locale } from "./config";

export type ChatLabels = {
  fabLabel: string;
  popupLabel: string;
  closeLabel: string;
  statusOnline: string;
  statusTyping: string;
  tooltip: string;
  tooltips: string[];
  welcome: string;
  placeholder: string;
  ariaMsg: string;
  ariaSend: string;
  inputLabel: string;
  name: string;
  notice: string;
  error: string;
};

export type UiMessages = {
  brand: string;
  nav: string;
  home: string;
  openSidebar: string;
  closeSidebar: string;
  chat: ChatLabels;
};

const ptBR: UiMessages = {
  brand: "Ottavada",
  nav: "Navegação principal",
  home: "Página inicial",
  openSidebar: "Abrir menu de navegação",
  closeSidebar: "Fechar menu",
  chat: {
    fabLabel: "Abrir chat",
    popupLabel: "Janela do chat",
    closeLabel: "Fechar chat",
    statusOnline: "Online",
    statusTyping: "Digitando...",
    tooltip: "Caso tenha alguma dúvida, pergunte ao nosso chatbot",
    tooltips: [
      "Caso tenha alguma dúvida, pergunte ao nosso chatbot",
      "Caso tenha alguma dúvida sobre a ferramenta, pode me perguntar",
      "Precisa de ajuda com o Ottavada? Pergunte aqui!",
    ],
    welcome: "Olá! Como posso ajudar? Envie sua mensagem.",
    placeholder: "Digite sua mensagem...",
    ariaMsg: "Mensagem",
    ariaSend: "Enviar",
    inputLabel: "Mensagem",
    name: "OttavoBot",
    notice: "O OttavoBot é um LLM, que pode demorar alguns segundos ou minutos dependendo da sua pergunta, por favor tenha paciência.",
    error: "Desculpe, ocorreu um erro. Tente novamente.",
  },
};

const en: UiMessages = {
  brand: "Ottavada",
  nav: "Main navigation",
  home: "Home",
  openSidebar: "Open navigation menu",
  closeSidebar: "Close menu",
  chat: {
    fabLabel: "Open chat",
    popupLabel: "Chat window",
    closeLabel: "Close chat",
    statusOnline: "Online",
    statusTyping: "Typing...",
    tooltip: "Have any questions? Ask our chatbot",
    tooltips: [
      "Have any questions? Ask our chatbot",
      "If you have any questions about the tool, feel free to ask me",
      "Need help with Ottavada? Ask here!",
    ],
    welcome: "Hello! How can I help? Send your message.",
    placeholder: "Type your message...",
    ariaMsg: "Message",
    ariaSend: "Send",
    inputLabel: "Message",
    name: "OttavoBot",
    notice: "OttavoBot is an LLM, which may take a few seconds or minutes depending on your question, please be patient.",
    error: "Sorry, an error occurred. Please try again.",
  },
};

const es: UiMessages = {
  brand: "Ottavada",
  nav: "Navegación principal",
  home: "Inicio",
  openSidebar: "Abrir menú de navegación",
  closeSidebar: "Cerrar menú",
  chat: {
    fabLabel: "Abrir chat",
    popupLabel: "Ventana del chat",
    closeLabel: "Cerrar chat",
    statusOnline: "En línea",
    statusTyping: "Escribiendo...",
    tooltip: "¿Tienes alguna duda? Pregunta a nuestro chatbot",
    tooltips: [
      "¿Tienes alguna duda? Pregunta a nuestro chatbot",
      "Si tienes alguna duda sobre la herramienta, puedes preguntarme",
      "¿Necesitas ayuda con Ottavada? ¡Pregunta aquí!",
    ],
    welcome: "¡Hola! ¿Cómo puedo ayudar? Envía tu mensaje.",
    placeholder: "Escribe tu mensaje...",
    ariaMsg: "Mensaje",
    ariaSend: "Enviar",
    inputLabel: "Mensaje",
    name: "OttavoBot",
    notice: "OttavoBot es un LLM, puede tardar unos segundos o minutos dependiendo de tu pregunta, por favor ten paciencia.",
    error: "Lo siento, ocurrió un error. Intenta de nuevo.",
  },
};

const fr: UiMessages = {
  brand: "Ottavada",
  nav: "Navigation principale",
  home: "Accueil",
  openSidebar: "Ouvrir le menu de navigation",
  closeSidebar: "Fermer le menu",
  chat: {
    fabLabel: "Ouvrir le chat",
    popupLabel: "Fenêtre de chat",
    closeLabel: "Fermer le chat",
    statusOnline: "En ligne",
    statusTyping: "Écrit...",
    tooltip: "Vous avez des questions ? Demandez à notre chatbot",
    tooltips: [
      "Vous avez des questions ? Demandez à notre chatbot",
      "Si vous avez des questions sur l’outil, n’hésitez pas à me demander",
      "Besoin d’aide avec Ottavada ? Demandez ici !",
    ],
    welcome: "Bonjour ! Comment puis-je vous aider ? Envoyez votre message.",
    placeholder: "Écrivez votre message...",
    ariaMsg: "Message",
    ariaSend: "Envoyer",
    inputLabel: "Message",
    name: "OttavoBot",
    notice: "OttavoBot est un LLM, cela peut prendre quelques secondes ou minutes selon votre question, merci de votre patience.",
    error: "Désolé, une erreur s’est produite. Veuillez réessayer.",
  },
};

const it: UiMessages = {
  brand: "Ottavada",
  nav: "Navigazione principale",
  home: "Home",
  openSidebar: "Apri menu di navigazione",
  closeSidebar: "Chiudi menu",
  chat: {
    fabLabel: "Apri chat",
    popupLabel: "Finestra della chat",
    closeLabel: "Chiudi chat",
    statusOnline: "Online",
    statusTyping: "Sta scrivendo...",
    tooltip: "Hai qualche domanda? Chiedi al nostro chatbot",
    tooltips: [
      "Hai qualche domanda? Chiedi al nostro chatbot",
      "Se hai domande sullo strumento, puoi chiedermelo",
      "Hai bisogno di aiuto con Ottavada? Chiedi qui!",
    ],
    welcome: "Ciao! Come posso aiutarti? Invia il tuo messaggio.",
    placeholder: "Scrivi il tuo messaggio...",
    ariaMsg: "Messaggio",
    ariaSend: "Invia",
    inputLabel: "Messaggio",
    name: "OttavoBot",
    notice: "OttavoBot è un LLM, potrebbe impiegare alcuni secondi o minuti a seconda della tua domanda, per favore abbi pazienza.",
    error: "Spiacenti, si è verificato un errore. Riprova.",
  },
};

const de: UiMessages = {
  brand: "Ottavada",
  nav: "Hauptnavigation",
  home: "Startseite",
  openSidebar: "Navigationsmenü öffnen",
  closeSidebar: "Menü schließen",
  chat: {
    fabLabel: "Chat öffnen",
    popupLabel: "Chat-Fenster",
    closeLabel: "Chat schließen",
    statusOnline: "Online",
    statusTyping: "Schreibt...",
    tooltip: "Haben Sie Fragen? Fragen Sie unseren Chatbot",
    tooltips: [
      "Haben Sie Fragen? Fragen Sie unseren Chatbot",
      "Wenn Sie Fragen zum Tool haben, können Sie mich gerne fragen",
      "Brauchen Sie Hilfe mit Ottavada? Fragen Sie hier!",
    ],
    welcome: "Hallo! Wie kann ich helfen? Senden Sie Ihre Nachricht.",
    placeholder: "Schreiben Sie Ihre Nachricht...",
    ariaMsg: "Nachricht",
    ariaSend: "Senden",
    inputLabel: "Nachricht",
    name: "OttavoBot",
    notice: "OttavoBot ist ein LLM, die Antwort kann je nach Frage einige Sekunden oder Minuten dauern, bitte haben Sie Geduld.",
    error: "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
  },
};

export const ui: Record<Locale, UiMessages> = {
  "pt-BR": ptBR,
  en,
  es,
  fr,
  it,
  de,
};
