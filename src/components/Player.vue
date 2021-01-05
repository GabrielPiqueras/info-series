<template lang="pug">

  //- Si el objeto track no está vacío, mostramos el contenido
  .content(v-if="Object.keys(track).length != 0")

    p.is-128x128
        img(v-bind:src="track.image_url")
    p
        strong {{ track.title }}
        small {{ track.sinopsis }}
    p
        a(v-bind:href="track.url" target="_blank") Más información
    audio(controls)

</template>

<script>
export default {
    data() {
        return {
            track: {}
        }
    },
    created() {
        this.$bus.$on('set-anime', (anime) => {
            this.track = anime;
        })
    }
}
</script>

<style lang="scss">
    .content {
        img {
            object-fit: cover;
            border-radius: 50%;
            width: 15em;
            height: 15em;
        }
    }
</style>