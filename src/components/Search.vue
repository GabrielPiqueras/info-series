<template lang="pug">
  
  main

    pm-notification(v-show="showNotification")
      p(slot="notif") No se encontraron resultados

    section.section
      pm-loader(v-show="isLoading")

      nav.nav.has-shadow
        .container
          input.input.is-large(type="text" placeholder="Buscar animes" ref="buscador" v-model="searchQuery")
          a.button.is-info.is-large.mt-4(v-on:click="search") Buscar
          a.button.is-danger.is-large.mt-4.ml-3 &times;
          p 
            small {{ searchMessage }}
            
        .container.results(v-show="!isLoading")
          .columns.is-multiline
            .column.is-one-quarter(v-for="t in tracks") 
              //- div.titulo {{ t.title }}
              //- div.imagen
              //-   img(v-bind:src='t.image_url')
              pm-track(
                v-bind:track="t"
                v-bind:class= "{ 'is-active': t === selectedAnime }"
                v-on:select="setSelectedAnime"
              )
</template>

<script>

// Servicios
import trackService from '@/services/track.js'

// Componentes
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      parametros: {
        order_by: 'title',
        order_by2: 'episodes',
        limit: 30,
      },
      tracks: [],
      selectedAnime: '',
      isLoading: false,
      showNotification: false
    }
  },
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    searchQuery() {
      // Visualizo el loader
      this.isLoading = true;

      // Ejecuto la busqueda
      trackService.search(this.searchQuery, this.parametros).then(respuesta => {
          this.tracks = respuesta;
          
          // Oculto el loader
          this.isLoading = false;
      })
    },
    showNotification() {
      if(this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000)
      }
    }
  },
  methods: {
    search() {
      // Llamamos al método del servicio pasando el término a buscar
      
    },
    setSelectedAnime(anime) {
      this.selectedAnime = anime;
    }
  },

  mounted() {
    this.$refs.buscador.focus()
  }
}
</script>

<style lang="scss">

body {
  height: 100%;
}

.is-active {
  border: 3px solid green;
}

@media screen and (max-width: 480px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 1024px) {
  
}

@media screen and (max-width: 1407px) {
  
}

</style>
