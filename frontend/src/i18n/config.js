import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    ar: {
      translations: require("./locales/ar/translations.json"),
    },
    ca: {
      translations: require("./locales/ca/translations.json"),
    },
    cs: {
      translations: require("./locales/cs/translations.json"),
    },
    da: {
      translations: require("./locales/da/translations.json"),
    },
    de: {
      translations: require("./locales/de/translations.json"),
    },
    en: {
      translations: require("./locales/en/translations.json"),
    },
    es: {
      translations: require("./locales/es/translations.json"),
    },
    fr: {
      translations: require("./locales/fr/translations.json"),
    },
    is: {
      translations: require("./locales/is/translations.json"),
    },
    it: {
      translations: require("./locales/it/translations.json"),
    },
    ja: {
      translations: require("./locales/ja/translations.json"),
    },
    ko: {
      translations: require("./locales/ko/translations.json"),
    },
    no: {
      translations: require("./locales/no/translations.json"),
    },
    pt: {
      translations: require("./locales/pt/translations.json"),
    },
    ru: {
      translations: require("./locales/ru/translations.json"),
    },
    sv: {
      translations: require("./locales/sv/translations.json"),
    },
    zh: {
      translations: require("./locales/zh/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = [
  "ar",
  "ca",
  "cs",
  "da",
  "de",
  "en",
  "es",
  "fr",
  "is",
  "it",
  "ja",
  "ko",
  "no",
  "pt",
  "ru",
  "sv",
  "zh",
];

export default i18n;
