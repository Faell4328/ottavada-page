import { defineConfig } from "astro/config";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sitemap from "@astrojs/sitemap";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://ottavada.com",
  output: "static",
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "src"),
      },
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          "pt-BR": "pt-BR",
          es: "es",
          fr: "fr",
          it: "it",
          de: "de",
        },
      },
    }),
  ],
});
