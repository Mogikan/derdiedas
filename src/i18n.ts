// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// UI-переводы (будут в public/locales)
const resources = {
  en: { translation: require('./locales/en/translation.json') , rule: require('./locales/en/rule.json') },
  ru: { translation: require('./locales/ru/translation.json') , rule: require('./locales/ru/rule.json') },
  de: { translation: require('./locales/de/translation.json') , rule: require('./locales/de/rule.json') },
  es: { translation: require('./locales/es/translation.json') , rule: require('./locales/es/rule.json') },
  fr: { translation: require('./locales/fr/translation.json') , rule: require('./locales/fr/rule.json') },
  ja: { translation: require('./locales/ja/translation.json') , rule: require('./locales/ja/rule.json') },
  zh: { translation: require('./locales/zh/translation.json') , rule: require('./locales/zh/rule.json') },
  pt: { translation: require('./locales/pt/translation.json') , rule: require('./locales/pt/rule.json') },
  ko: { translation: require('./locales/ko/translation.json') , rule: require('./locales/ko/rule.json') },
  ar: { translation: require('./locales/ar/translation.json') , rule: require('./locales/ar/rule.json') },
  hi: { translation: require('./locales/hi/translation.json') , rule: require('./locales/hi/rule.json') },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // ← английский по умолчанию
    supportedLngs: ['en', 'ru', 'de', 'es', 'fr', 'ja', 'zh', 'pt', 'ko', 'ar', 'hi'],
    interpolation: { escapeValue: false },
    ns: ["translation", "rule"],
    defaultNS: "translation", // Основное пространство имен
  });

export default i18n;