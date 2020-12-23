<template lang="pug">
  
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text" placeholder="Buscar animes" v-model="searchQuery")
          a.button.is-info.is-large.mt-4(v-on:click="search") Buscar
          a.button.is-danger.is-large.mt-4.ml-3 &times;
          p
            small {{ searchMessage }}
            
        .container.results
          .columns
            .column(v-for="t in tracks") 
              div.titulo {{ t.title }}
              img.imagen(v-bind:src='t.image_url')
              
</template>

<script>

// Servicios
import trackService from './services/track.js'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    searchQuery() {
      trackService.search(this.searchQuery).then(res => {
          this.tracks = res;
      })
    }
  },
  methods: {
    search() {
      // Llamamos al método del servicio pasando el término a buscar
      
    }
  }
}
</script>

<style lang="scss">

body {
  background: rgb(151, 151, 151);
  height: 100%;
}

.columns {
  display: flex;
  flex-wrap: wrap;

  .column {
      display: block;
      flex-basis: revert;
      flex-grow: 1;
      flex-shrink: 0;
      padding: 0.75rem;
      width: 33%;
      text-align: center;
      
      .titulo {
        font-size: 20px;
      }

      img {
        width: 65%;
        height: 85%;
        object-fit: cover;
        margin-top: 1em;
      }
  }
}

@media screen and (max-width: 480px) {
  .column {
    width: 51%;
  }
}

@media screen and (max-width: 768px) {
  .column {
    width: 40%;

    .titulo {
      font-size: 1.3em;
    }
  }
}

@media screen and (max-width: 1024px) {
  
}

@media screen and (max-width: 1407px) {
  
}
</style>
