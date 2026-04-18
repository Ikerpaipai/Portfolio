import i18next from 'i18next'
import global_fr from "./translations/fr/global.json"
import global_es from "./translations/es/global.json"
import global_eng from "./translations/eng/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'eng',
  resources: {
    fr: {
      global: global_fr
    },
    es: {
      global: global_es
    },
    eng: {
      global: global_eng
    }
  }
})

export default i18next;