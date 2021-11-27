import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "マリオ": "Mario",
    }
  },
  ja: {
    translation: {
      "マリオ": "マリオ",
    }
  }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ja",
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;