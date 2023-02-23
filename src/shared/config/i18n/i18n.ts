import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

const  __IS_DEV__ = false; // hotfix, need to change by lesson
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // Not needed for react as it escapes by default
        },
    })

export default i18n
