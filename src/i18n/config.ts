export const SUPPORTED_LOCALES = ["en", "pt-BR", "es", "fr", "it", "de"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "/files/flags/us.svg",
  "pt-BR": "/files/flags/br.svg",
  es: "/files/flags/es.svg",
  fr: "/files/flags/fr.svg",
  it: "/files/flags/it.svg",
  de: "/files/flags/de.svg",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function pickLocale(rawLocale: string | undefined): Locale {
  if (isLocale(rawLocale)) return rawLocale;
  return DEFAULT_LOCALE;
}

export function getPathLocale(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.replace(/\.html$/, "");
  return isLocale(first) ? first : null;
}

export function stripLocaleFromPath(pathname: string): string {
  const locale = getPathLocale(pathname);
  if (!locale) return pathname;
  const stripped = pathname.replace(new RegExp(`^/${locale}(\\.html)?(?=/|$)`), "");
  if (!stripped) return "/";
  if (stripped.endsWith(".html")) {
    return stripped.slice(0, -".html".length) || "/";
  }
  return stripped;
}

export function withLocale(path: string, locale: Locale): string {
  let normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.endsWith(".html")) {
    normalized = normalized.slice(0, -".html".length) || "/";
  }
  if (normalized !== "/" && !normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }
  if (normalized === "/") return `/${locale}/`;
  return `/${locale}${normalized}`;
}

export const HOME_LABEL: Record<Locale, string> = {
  "pt-BR": "Página inicial",
  en: "Home",
  es: "Inicio",
  fr: "Accueil",
  it: "Home",
  de: "Startseite",
};

export const BRAND_TAGLINE: Record<Locale, string> = {
  "pt-BR": "O seu maestro de partituras",
  en: "Your sheet music conductor",
  es: "Tu director de partituras",
  fr: "Votre chef de partitions",
  it: "Il tuo direttore di spartiti",
  de: "Ihr Noten-Dirigent",
};

export const NAV_LABEL: Record<Locale, string> = {
  "pt-BR": "Navegação principal",
  en: "Main navigation",
  es: "Navegación principal",
  fr: "Navigation principale",
  it: "Navigazione principale",
  de: "Hauptnavigation",
};

export type StaticPage = "thanks" | "docs" | "download";

export const PAGE_SLUGS: Record<StaticPage, Record<Locale, string>> = {
  thanks: {
    "pt-BR": "agradecimento",
    en: "thank-you",
    es: "gracias",
    fr: "merci",
    it: "ringraziamento",
    de: "danke",
  },
  docs: {
    "pt-BR": "documentacao",
    en: "docs",
    es: "documentacion",
    fr: "documentation",
    it: "documentazione",
    de: "dokumentation",
  },
  download: {
    "pt-BR": "download",
    en: "download",
    es: "descarga",
    fr: "telechargement",
    it: "download",
    de: "download",
  },
};

export function pagePath(page: StaticPage, locale: Locale): string {
  return `/${PAGE_SLUGS[page][locale]}`;
}
