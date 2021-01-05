/* Servicio que interactuará con PlatziMusic, buscará las canciones y obtendrá información sobre ellas. */

import platziMusicService from './platzi-music.js'

const trackService = {}

trackService.search = function(q, parametros) {
    
    const type = 'track';

    return platziMusicService.get('/search/anime', {
        params: {
            q: q,
            order_by: parametros.order_by,
            order_by2: parametros.order_by2,
            limit: parametros.limit
        }
    })
    
    .then(res => {
        return res.data.results
    })
}

trackService.details = function(id) {
    return platziMusicService.get(`/anime/${id}`)
    .then(res => {
        return res.data
    })
}

/* Exportamos el servicio  */
export default trackService