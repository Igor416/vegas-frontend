import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

//const SERVER_URL = 'http://127.0.0.1:8000'
const SERVER_URL = ''

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false
  },
  ns: ['home'],
  defaultNS: 'home',
  backend: {
    loadPath: SERVER_URL + '/public/locales/{{ns}}/{{lng}}.json',
  },
});

export default i18n;