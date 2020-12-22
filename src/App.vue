<template lang="pug">
  
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text" placeholder="Buscar canciones" v-model="searchQuery")
          a.button.is-info.is-large.mt-4(v-on:click="search") Buscar
          a.button.is-danger.is-large.mt-4.ml-3 &times;
          p
            small {{ searchMessage }}
            
        .container.results
          .columns
            .column(v-for="t in tracks") {{ t.name }} - {{ t.artist}}
</template>

<script>

const tracks = [
  { name: 'Muchacha', artist:'Luis Alberto Spinetta' },  
  { name: 'Hoy acá en el baile', artist:'El pepo' },
  { name: 'I was made for loving you', artist:'Kiss' } 
]

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
  methods: {
    search() {
      this.tracks = tracks;
      this.results = tracks.length;
      console.log(this.searchQuery);
    }
  }
}
</script>

<style lang="scss">

body {
  background: rgb(151, 151, 151);
  height: 100%;
}
</style>
