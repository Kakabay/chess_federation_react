import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerEn from "./locales/en/header.json";
import headerRu from "./locales/ru/header.json";
import headerTm from "./locales/tm/header.json";

import footerEn from "./locales/en/footer.json";
import footerRu from "./locales/ru/footer.json";
import footerTm from "./locales/tm/footer.json";

import homeEn from "./locales/en/home.json";
import homeRu from "./locales/ru/home.json";
import homeTm from "./locales/tm/home.json";

import contactsEn from "./locales/en/contacts.json";
import contactsRu from "./locales/ru/contacts.json";
import contactsTm from "./locales/tm/contacts.json";

import { useZusLang } from "./zustand/use-zus-lang";

const initialLanguage = useZusLang.getState().activeLang;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      header: headerEn,
      home: homeEn,
      footer: footerEn,
      contacts: contactsEn,
    },
    ru: {
      header: headerRu,
      home: homeRu,
      footer: footerRu,
      contacts: contactsRu,
    },
    tm: {
      header: headerTm,
      home: homeTm,
      footer: footerTm,
      contacts: contactsTm,
    },
  },
  lng: initialLanguage.value,
  fallbackLng: "ru",
  ns: ["header", "home", "footer", "contacts"],
  defaultNS: "header",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
