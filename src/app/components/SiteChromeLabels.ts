export type Lang = "en" | "es";

export type ChromeLabels = {
  brand: string;
  nav: {
    mission: string;
    issue: string;
    support: string;
    involved: string;
    transparency: string;
    contact: string;
    colophon: string;
    stories: string;
  };
  switchTo: {
    en: string; // label shown when switching to EN
    es: string; // label shown when switching to ES
  };
};

export const CHROME_EN: ChromeLabels = {
  brand: "Paperboy Foundation",
  nav: {
    mission: "Mission",
    issue: "Issue 01",
    support: "Support",
    involved: "Get involved",
    transparency: "Transparency",
    contact: "Contact",
    colophon: "Colophon",
    stories: "Stories",
  },
  switchTo: {
    en: "EN",
    es: "ES",
  },
};

export const CHROME_ES: ChromeLabels = {
  brand: "Paperboy Foundation",
  nav: {
    mission: "Misión",
    issue: "Edición 01",
    support: "Apoyar",
    involved: "Participa",
    transparency: "Transparencia",
    contact: "Contacto",
    colophon: "Colofón",
    stories: "Historias",
  },
  switchTo: {
    en: "EN",
    es: "ES",
  },
};