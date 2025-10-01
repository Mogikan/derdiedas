// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// UI-переводы (будут в public/locales)
const resources = {
  en: { translation: require('./locales/en/translation.json') },
  ru: { translation: require('./locales/ru/translation.json') },
  de: { translation: require('./locales/de/translation.json') },
  es: { translation: require('./locales/es/translation.json') },
  fr: { translation: require('./locales/fr/translation.json') },
  ja: { translation: require('./locales/ja/translation.json') },
  zh: { translation: require('./locales/zh/translation.json') },
  pt: { translation: require('./locales/pt/translation.json') },
  ko: { translation: require('./locales/ko/translation.json') },
  ar: { translation: require('./locales/ar/translation.json') },
  hi: { translation: require('./locales/hi/translation.json') },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // ← английский по умолчанию
    supportedLngs: ['en', 'ru', 'de', 'es', 'fr', 'ja', 'zh', 'pt', 'ko', 'ar', 'hi'],
    interpolation: { escapeValue: false },
  });

export default i18n;