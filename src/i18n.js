import i18next from 'i18next'
import global_fr from "./translations/fr/global.json"
import global_es from "./translations/es/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'fr',
  resources: {
    fr: {
      global: global_fr
    },
    es: {
      global: global_es
    }
  }
})

export default i18next;