<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong Platzi Music
                            
                    //- Menu
                    nav.navbar(role='navigation' aria-label='main navigation')
                        .navbar-brand
                            a.navbar-burger(v-bind:class="{ 'is-active': menuHamburguesa }", @click="mostrarMenuHamburguesa" role='button' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample')
                                span(aria-hidden='true')
                                span(aria-hidden='true')
                                span(aria-hidden='true')
                        #navbarBasicExample.navbar-menu
                            .navbar-end
                            router-link.navbar-item(to="/") Buscar
                            router-link.navbar-item(to="about") Nosotros
        //- Portada (Hero)
        .hero-body
            .container.has-text-centered
                h1.title Platzi Music
                h2.subtitle Canciones que están Vue-nisimas!
                //- Reproductor
                pm-player
 
</template>

<script>

import PmPlayer from '@/components/Player.vue'

export default {
    data() {
        return {
            menuHamburguesa: false
        }
    },
    components: {
        PmPlayer
    },
    methods: {
        mostrarMenuHamburguesa() {
            if (this.menuHamburguesa) {
                this.menuHamburguesa = false;
            } else {
                this.menuHamburguesa = true;
            }
        }
    }
}
</script>