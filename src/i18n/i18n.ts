import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './locales';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    nsSeparator: false,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    initImmediate: true,
  });

export default i18n;
