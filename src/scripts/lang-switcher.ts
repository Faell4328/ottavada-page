const STORAGE_KEY = "ottavada-lang";

const isSupported = (value: string | null | undefined): value is string =>
  !!value && ["en", "pt-BR", "es", "fr", "it", "de"].includes(value);

function writeStored(lang: string) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

function init() {
  const links = document.querySelectorAll<HTMLAnchorElement>("a[data-lang]");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const lang = link.getAttribute("data-lang");
      if (isSupported(lang)) writeStored(lang);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

