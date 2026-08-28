import type { Locale } from "./config";

export type DownloadMessages = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  heading: string;
  windows: string;
  linux: string;
  mac: string;
  archLabel: { win: string; linux: string; mac: string };
  winX32: string;
  winX64: string;
  winInstaller: string;
  linuxBtn: string;
  linuxInstaller: string;
  macBtn: string;
  manualTitle: string;
  manual: string;
};

export const download: Record<Locale, DownloadMessages> = {
  "pt-BR": {
    meta: {
      title: "Baixar Ottavada — Windows, Linux e Mac",
      description: "Baixe o Ottavada gratuitamente. Disponível para Windows x32/x64, Linux x64 e Mac universal.",
      ogTitle: "Baixar Ottavada",
      ogDescription: "Download gratuito para Windows, Linux e Mac.",
    },
    heading: "Baixar Ottavada",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 e x64", linux: "x64", mac: "universal" },
    winX32: "Baixar .exe x32",
    winX64: "Baixar .exe x64",
    winInstaller: "Baixar instalador x32 e x64",
    linuxBtn: "Baixar .AppImage",
    linuxInstaller: "Baixar instalador",
    macBtn: "Baixar .dmg",
    manualTitle: "Download manual",
    manual: "Baixar manualmente",
  },
  en: {
    meta: {
      title: "Download Ottavada — Windows, Linux and Mac",
      description: "Download Ottavada for free. Available for Windows x32/x64, Linux x64 and Mac universal.",
      ogTitle: "Download Ottavada",
      ogDescription: "Free download for Windows, Linux and Mac.",
    },
    heading: "Download Ottavada",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 and x64", linux: "x64", mac: "universal" },
    winX32: "Download .exe x32",
    winX64: "Download .exe x64",
    winInstaller: "Download installer x32 and x64",
    linuxBtn: "Download .AppImage",
    linuxInstaller: "Download installer",
    macBtn: "Download .dmg",
    manualTitle: "Manual download",
    manual: "Download manually",
  },
  es: {
    meta: {
      title: "Descargar Ottavada — Windows, Linux y Mac",
      description: "Descarga Ottavada gratis. Disponible para Windows x32/x64, Linux x64 y Mac universal.",
      ogTitle: "Descargar Ottavada",
      ogDescription: "Descarga gratuita para Windows, Linux y Mac.",
    },
    heading: "Descargar Ottavada",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 y x64", linux: "x64", mac: "universal" },
    winX32: "Descargar .exe x32",
    winX64: "Descargar .exe x64",
    winInstaller: "Descargar instalador x32 y x64",
    linuxBtn: "Descargar .AppImage",
    linuxInstaller: "Descargar instalador",
    macBtn: "Descargar .dmg",
    manualTitle: "Descarga manual",
    manual: "Descargar manualmente",
  },
  fr: {
    meta: {
      title: "Télécharger Ottavada — Windows, Linux et Mac",
      description: "Téléchargez Ottavada gratuitement. Disponible pour Windows x32/x64, Linux x64 et Mac universel.",
      ogTitle: "Télécharger Ottavada",
      ogDescription: "Téléchargement gratuit pour Windows, Linux et Mac.",
    },
    heading: "Télécharger Ottavada",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 et x64", linux: "x64", mac: "universel" },
    winX32: "Télécharger .exe x32",
    winX64: "Télécharger .exe x64",
    winInstaller: "Télécharger l'installateur x32 et x64",
    linuxBtn: "Télécharger .AppImage",
    linuxInstaller: "Télécharger l'installateur",
    macBtn: "Télécharger .dmg",
    manualTitle: "Téléchargement manuel",
    manual: "Télécharger manuellement",
  },
  it: {
    meta: {
      title: "Scarica Ottavada — Windows, Linux e Mac",
      description: "Scarica Ottavada gratuitamente. Disponibile per Windows x32/x64, Linux x64 e Mac universale.",
      ogTitle: "Scarica Ottavada",
      ogDescription: "Download gratuito per Windows, Linux e Mac.",
    },
    heading: "Scarica Ottavada",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 e x64", linux: "x64", mac: "universale" },
    winX32: "Scarica .exe x32",
    winX64: "Scarica .exe x64",
    winInstaller: "Scarica installatore x32 e x64",
    linuxBtn: "Scarica .AppImage",
    linuxInstaller: "Scarica installatore",
    macBtn: "Scarica .dmg",
    manualTitle: "Download manuale",
    manual: "Scarica manualmente",
  },
  de: {
    meta: {
      title: "Ottavada herunterladen — Windows, Linux und Mac",
      description: "Laden Sie Ottavada kostenlos herunter. Verfügbar für Windows x32/x64, Linux x64 und Mac universal.",
      ogTitle: "Ottavada herunterladen",
      ogDescription: "Kostenloser Download für Windows, Linux und Mac.",
    },
    heading: "Ottavada herunterladen",
    windows: "Windows",
    linux: "Linux",
    mac: "Mac",
    archLabel: { win: "x32 und x64", linux: "x64", mac: "universal" },
    winX32: "Download .exe x32",
    winX64: "Download .exe x64",
    winInstaller: "Installer x32 und x64 herunterladen",
    linuxBtn: "Download .AppImage",
    linuxInstaller: "Installer herunterladen",
    macBtn: "Download .dmg",
    manualTitle: "Manueller Download",
    manual: "Manuell herunterladen",
  },
};
