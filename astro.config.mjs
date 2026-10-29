import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// Site 100% estático (sem adapter).
// No GitHub Actions (deploy do GitHub Pages) o site fica em /brann-site-atlantica/;
// localmente e no Cloudflare, na raiz. Com domínio próprio, troque `site` e remova `base`.
const githubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: githubPages ? "https://brann-marketing-digital.github.io" : undefined,
  base: githubPages ? "/brann-site-atlantica" : undefined,

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
