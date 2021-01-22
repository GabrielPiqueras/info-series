import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {
        search: 'Search',
        about: 'About',
        login: 'Login',
        register: 'Register',
        description: 'Search and information about productions.',

        buttonSearch: 'Search',
    },

    es: {
        search: 'Búsqueda',
        about: 'Nosotros',
        login: 'Iniciar sesión',
        register: 'Registro',
        description: 'Búsqueda e información sobre producciones.',

        buttonSearch: 'Buscar',
    }
}

// Creamos una instancia de la librería, recibe un objeto con dos propiedades
const i18n = new VueI18n({
    // Los mensajes en los distintos idiomas
    messages,
    // Y el idioma que se mostrará por defecto
    locale: 'en'
})

export default i18n

