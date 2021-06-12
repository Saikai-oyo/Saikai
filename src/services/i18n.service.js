import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const options = {
    fallbackLng: 'en',
    supportedLngs: ['en', 'he'],
    debug: true, // TODO:Before go to production need change to `false`.
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: {
        wait: true,
    },
};

i18n.use(HttpApi).use(initReactI18next).init(options);

export default i18n;
