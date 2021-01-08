<template lang="pug">
    .card(v-if="serie")
        .tipo(v-if="serie.type == 'TV'") Anime
        .tipo(v-else-if="serie.type == 'Movie'") Película
        .tipo(v-else-if="serie.type == 'Special'") Especial
        .tipo(v-else) {{ serie.type }}
        .card-image
            figure.image.is-1by1
                img(v-bind:src="serie.image_url")

            .card-content
                .media
                    .media-content
                        p.title-is-6
                            strong(v-model="serie") {{ serie.title }}
                        p.subtitle.is-6 Fans: {{ serie.members }}
                .content
                    strong ⭐{{ serie.score }}
                    nav.level
                        .level-left
                            button.level-item.button.is-primary
                                span.icon.is-small(v-on:click="selectAnime") ▶
                            button.level-item.button.is-warning(v-on:click="goToAnime(serie.mal_id)") Ver más
                            
</template>

<script>

export default {
    data() {
        return {
            precio: 2
        }
    }, 
    props: {
        serie: { type: Object, required: true }
    },
    methods: {
        selectAnime() {
            if (this.serie.rated === 'R') { return }
            
            this.$emit('select', this.serie);
            
            /* Emitimos el evento 'set-anime' desde la nueva instancia de Vue dentro de $bus */
            /* Estaremos emitiendo con $emit un evento a nuestro plugin 'EventBus',
               El cual recibiremos con $on en el otro componente */
            this.$bus.$emit('set-anime', this.serie)
        },
        goToAnime(id) {
            if (this.serie.rated === 'R') { return }

            this.$router.push({ name: 'serie', params: { id } })
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