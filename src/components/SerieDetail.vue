<template lang="pug">

    main
        h1.title.is-2 {{ serie.title }}
        pm-serie(v-bind:serie="serie")
        
    //- h1 Anime - Información

    //- h2 {{ serie.title }}
    //- img(v-bind:src="serie.image_url")
    //- p {{ serie.synopsis }}
</template>

<script>

import PmSerie from '@/components/Serie.vue'
import serieService from '@/services/serie.js'

export default {
    data() {
        return {
            serie: {}
        }
    },
    components: {
        PmSerie
    },
    methods: {

    },

    created() {
        const id = this.$route.params.id;

        serieService.details(id).then(anime => {
            this.serie = anime;
        })
    }
}
</script>

<style lang="scss" scoped>
    main {
        margin: 2em
    }
    .card {
        width: 25%;
    }
</style>