// Fonte única dos dados do cliente. Nada disso deve ficar fixo no HTML.

import type { ImageMetadata } from "astro";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import badgeAppStore from "../assets/home/badge-app-store.png";
import badgeGooglePlay from "../assets/home/badge-google-play.png";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ImageMetadata;
}

export interface Office {
  city: string;
  /** Linhas do endereço, na ordem em que aparecem. */
  lines: string[];
}

export interface AppLink {
  label: string;
  href: string;
  badge: ImageMetadata;
}

export interface SiteConfig {
  name: string;
  description: string;
  /** Domínio final, sem barra no fim. Ainda não definido: preencher ao publicar. */
  url: string;
  locale: string;
  contact: {
    phone: string;
    whatsapp: { display: string; number: string };
    assistance24h: string[];
    offices: Office[];
    /** Endereço usado no mapa incorporado. */
    mapQuery: string;
  };
  memberArea: { label: string; href: string };
  apps: AppLink[];
  manual: { file: string; label: string };
  social: SocialLink[];
  nav: NavItem[];
}

export const site: SiteConfig = {
  name: "Atlântica Proteção Veicular",
  description:
    "Atlântica Proteção Veicular: proteção a partir de R$ 89,90, sem taxa de adesão ou vistoria. Seja um associado!",
  url: "https://exemplo.com.br",
  locale: "pt-BR",
  contact: {
    phone: "(47) 3311-5454",
    whatsapp: { display: "(47) 98922-5161", number: "554789225161" },
    assistance24h: ["0800 000 4954", "(41) 4101 8006", "(47) 98922-5163"],
    offices: [
      {
        city: "Balneário Camboriú",
        lines: [
          "Rua Campo Erê, Nº 75, Bairro Dos Municípios",
          "Balneário Camboriú – CEP: 88337-340",
        ],
      },
      {
        city: "Brusque",
        lines: [
          "Av. Otto Renaux – Bairro São Luiz – Brusque 88351-301",
          "(Centro Comercial River Mall)",
        ],
      },
    ],
    mapQuery: "Rua Campo Erê, 75, Balneário Camboriú, SC",
  },
  memberArea: {
    label: "Área do Associado",
    href: "https://area-sistemas.hinova.com.br/sga/area/v5/login/",
  },
  apps: [
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=br.com.atlanticaprotecaoveicular&hl=pt_BR",
      badge: badgeGooglePlay,
    },
    {
      label: "App Store",
      href: "https://apps.apple.com/br/app/atl%C3%A2ntica/id6742898419",
      badge: badgeAppStore,
    },
  ],
  // O rótulo repete o nome do arquivo (inclusive os erros de digitação).
  manual: {
    file: "/manual-do-associado.pdf",
    label: "Manual do Associado - COM DIRETOS E REGRAS DA ASSOCAÇÃO (2).pdf",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/atlantica_ab/", icon: instagramIcon },
    { label: "Facebook", href: "https://www.facebook.com/atlanticapv", icon: facebookIcon },
  ],
  nav: [
    { label: "Início", href: "/" },
    { label: "Benefícios", href: "/#beneficios" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
    { label: "Blog", href: "/blog" },
  ],
};

// `base` do Astro, sem barra no fim: "" na raiz, "/brann-site-atlantica" no GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefixa um caminho interno (ex.: "/blog") com o `base` do site. */
export function withBase(path: string): string {
  return `${base}${path}`;
}

/** Remove o `base` de um pathname, devolvendo o caminho interno (ex.: "/blog"). */
export function withoutBase(pathname: string): string {
  return pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
}

/** Link do WhatsApp, com mensagem opcional. */
export function whatsappUrl(message?: string): string {
  const text = message ? encodeURIComponent(message) : "";
  return `https://api.whatsapp.com/send/?phone=${site.contact.whatsapp.number}&text${text ? `=${text}` : ""}&type=phone_number&app_absent=0`;
}
