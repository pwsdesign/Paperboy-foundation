import { en } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";

export function t(lang: Lang) {
  return lang === "es" ? es : en;
}