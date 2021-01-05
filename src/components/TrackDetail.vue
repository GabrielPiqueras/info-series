<template lang="pug">

    main
        h1.title.is-2 {{ track.title }}
        pm-track(v-bind:track="track")
        
    //- h1 Anime - Información

    //- h2 {{ track.title }}
    //- img(v-bind:src="track.image_url")
    //- p {{ track.synopsis }}
</template>

<script>

import PmTrack from '@/components/Track.vue'
import trackService from '@/services/track.js'

export default {
    data() {
        return {
            track: {}
        }
    },
    components: {
        PmTrack
    },
    methods: {

    },

    created() {
        const id = this.$route.params.id;

        trackService.details(id).then(anime => {
            this.track = anime;
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