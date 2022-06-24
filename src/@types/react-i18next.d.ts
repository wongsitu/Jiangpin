import localeES from '@/src/i18n/locales/es/translation.json';
import localeEN from '@/src/i18n/locales/en/translation.json';
import localeCN from '@/src/i18n/locales/cn/translation.json';

declare module 'react-i18next' {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: 'localeES';
    // custom resources type
    resources: {
      localeES: typeof localeES['translation'];
      localeEN: typeof localeEN['translation'];
      localeCN: typeof localeCN['translation'];
    };
  }
}
