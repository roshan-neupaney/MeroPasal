import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en/translation.json';
import ne from './locales/ne/translation.json';

const resources = {
  en: { translation: en },
  ne: { translation: ne },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;