/* Servicio que interactuará con PlatziMusic, buscará las canciones y obtendrá información sobre ellas. */

import platziMusicService from './platzi-music.js'

const trackService = {}

trackService.search = function(q) {
    
    const type = 'track';

    return platziMusicService.get('/search/anime', {
        params: { q: q }
    })
    
    .then(res => {
        return res.data.results
    })
}

/* Exportamos el servicio  */
export default trackService