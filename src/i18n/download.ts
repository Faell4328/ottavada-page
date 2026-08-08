import type { Locale } from "./config";

export type DownloadMessages = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  heading: string;
  detected: string;
  windows: string;
  linux: string;
  mac: string;
  archLabel: { win: string; linux: string; mac: string };
  downloadBtn: string;
  archOsHeader: string;
  tableDownload: string;
  scriptTitle: string;
  scriptDesc: string;
  scriptWin: string;
  scriptUnix: string;
};

export const download: Record<Locale, DownloadMessages> = {
  "pt-BR": {
    meta: {
      title: "Baixar Ottavada — Windows, Linux e Mac",
      description:
        "Baixe o Ottavada gratuitamente. Disponível para Windows x32/x64, Linux x64 e Mac x64/arm64.",
      ogTitle: "Baixar Ottavada",
      ogDescription: "Download gratuito para Windows, Linux e Mac.",
    },
    heading: "Baixar Ottavada",
    detected: "Detectamos que você usa %s. Clique no botão abaixo para baixar:",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 e x64", linux: "x64", mac: "x64 e arm64" },
    downloadBtn: "Baixar o instalador",
    archOsHeader: "Arquitetura / SO",
    tableDownload: "Baixar",
    scriptTitle: "Instalação via script",
    scriptDesc:
      "Execute os comandos abaixo no terminal para baixar e executar o instalador automaticamente:",
    scriptWin: "Baixe e execute o ottavada.cmd e siga as instruções na tela.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
  en: {
    meta: {
      title: "Download Ottavada — Windows, Linux and Mac",
      description:
        "Download Ottavada for free. Available for Windows x32/x64, Linux x64 and Mac x64/arm64.",
      ogTitle: "Download Ottavada",
      ogDescription: "Free download for Windows, Linux and Mac.",
    },
    heading: "Download Ottavada",
    detected: "We detected you are using %s. Click the button below to download:",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 and x64", linux: "x64", mac: "x64 and arm64" },
    downloadBtn: "Download installer",
    archOsHeader: "Arch-OS",
    tableDownload: "Download",
    scriptTitle: "Script install",
    scriptDesc:
      "Run the commands below in your terminal to download and run the installer automatically:",
    scriptWin: "Download and run ottavada.cmd and follow the on-screen instructions.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
  es: {
    meta: {
      title: "Descargar Ottavada — Windows, Linux y Mac",
      description:
        "Descarga Ottavada gratis. Disponible para Windows x32/x64, Linux x64 y Mac x64/arm64.",
      ogTitle: "Descargar Ottavada",
      ogDescription: "Descarga gratuita para Windows, Linux y Mac.",
    },
    heading: "Descargar Ottavada",
    detected: "Detectamos que usas %s. Haz clic en el botón para descargar:",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 y x64", linux: "x64", mac: "x64 y arm64" },
    downloadBtn: "Descargar instalador",
    archOsHeader: "Arq. / SO",
    tableDownload: "Descargar",
    scriptTitle: "Instalación por script",
    scriptDesc:
      "Ejecuta los comandos abajo en la terminal para descargar y ejecutar el instalador automáticamente:",
    scriptWin: "Descarga y ejecuta ottavada.cmd y sigue las instrucciones en pantalla.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
  fr: {
    meta: {
      title: "Télécharger Ottavada — Windows, Linux et Mac",
      description:
        "Téléchargez Ottavada gratuitement. Disponible pour Windows x32/x64, Linux x64 et Mac x64/arm64.",
      ogTitle: "Télécharger Ottavada",
      ogDescription: "Téléchargement gratuit pour Windows, Linux et Mac.",
    },
    heading: "Télécharger Ottavada",
    detected: "Nous avons détecté que vous utilisez %s. Cliquez pour télécharger :",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 et x64", linux: "x64", mac: "x64 et arm64" },
    downloadBtn: "Télécharger l'installateur",
    archOsHeader: "Arch. / OS",
    tableDownload: "Télécharger",
    scriptTitle: "Installation par script",
    scriptDesc:
      "Exécutez les commandes ci-dessous dans votre terminal pour télécharger et lancer l'installateur automatiquement :",
    scriptWin: "Téléchargez et exécutez ottavada.cmd puis suivez les instructions à l'écran.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
  it: {
    meta: {
      title: "Scarica Ottavada — Windows, Linux e Mac",
      description:
        "Scarica Ottavada gratuitamente. Disponibile per Windows x32/x64, Linux x64 e Mac x64/arm64.",
      ogTitle: "Scarica Ottavada",
      ogDescription: "Download gratuito per Windows, Linux e Mac.",
    },
    heading: "Scarica Ottavada",
    detected: "Abbiamo rilevato che usi %s. Clicca per scaricare:",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 e x64", linux: "x64", mac: "x64 e arm64" },
    downloadBtn: "Scarica l'installer",
    archOsHeader: "Arch. / OS",
    tableDownload: "Scarica",
    scriptTitle: "Installazione via script",
    scriptDesc:
      "Esegui i comandi qui sotto nel terminale per scaricare ed eseguire l'installatore automaticamente:",
    scriptWin: "Scarica ed esegui ottavada.cmd e segui le istruzioni sullo schermo.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
  de: {
    meta: {
      title: "Ottavada herunterladen — Windows, Linux und Mac",
      description:
        "Laden Sie Ottavada kostenlos herunter. Verfügbar für Windows x32/x64, Linux x64 und Mac x64/arm64.",
      ogTitle: "Ottavada herunterladen",
      ogDescription: "Kostenloser Download für Windows, Linux und Mac.",
    },
    heading: "Ottavada herunterladen",
    detected: "Wir haben erkannt, dass Sie %s verwenden. Klicken Sie zum Herunterladen:",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 und x64", linux: "x64", mac: "x64 und arm64" },
    downloadBtn: "Installer herunterladen",
    archOsHeader: "Arch. / OS",
    tableDownload: "Download",
    scriptTitle: "Installation per Skript",
    scriptDesc:
      "Führen Sie die folgenden Befehle im Terminal aus, um das Installationsprogramm automatisch herunterzuladen und auszuführen:",
    scriptWin: "Laden Sie ottavada.cmd herunter und führen Sie es aus. Folgen Sie den Anweisungen.",
    scriptUnix: "curl -fsSL https://ottavada.com/ottavada.sh | sh",
  },
};
