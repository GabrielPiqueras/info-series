<template lang="pug">
    .card
        .tipo(v-if="track.type == 'TV'") Anime
        .tipo(v-else-if="track.type == 'Movie'") Película
        .tipo(v-else-if="track.type == 'Special'") Especial
        .tipo(v-else) {{ track.type }}
        .card-image
            figure.image.is-1by1
                img(v-bind:src="track.image_url")

            .card-content
                .media
                    .media-content
                        p.title-is-6
                            strong(v-model="track") {{ track.title }}
                        p.subtitle.is-6 Fans: {{ track.members }}
                .content
                    strong ⭐{{ track.score }}
                    nav.level
                        .level-left
                            a.level-item
                                span.icon.is-small(v-on:click="selectAnime") ▶

</template>

<script>

export default {
    props: {
        track: { type: Object, required: true }
    },
    methods: {
        selectAnime() {
            this.$emit('select', this.track);
        }
    }
}
</script>

<style lang="scss">

.image {
   img {
      object-fit: cover;
   }
}
    
.card {
  height: 100%;

  .card-content {
    padding: 1rem;
  }
}

.tipo {
    position: absolute;
    z-index: 1;
    background: rgb(0,0,0);
    min-width: 4.7em;
    min-height: 2em;
    padding: 0.2em;
    font-weight: bold;
    color: white;
    text-align: center;
    right: 0;
    border-radius: 0 0.25rem;
}
</style>