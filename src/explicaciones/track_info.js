/* Servicio que interactuará con PlatziMusic, buscará las canciones y obtendrá información sobre ellas. */

/* Importo el servicio de PlatziMusic */
import platziMusicService from './platzi-music.js'

const trackService = {}

/* Para que trackService pueda interactuar con la API de PlatziMusic, creamos este método que buscará las canciones.
Recibirá por parámetro 'q' que es un estándar para referirnos a 'query' en búsquedas */
trackService.search = function(q) {
    /* Para obtener distintos tipos de cosas, en este caso serán canciones */
    const type = 'track';

    /* Como platziMusicService es una instancia de la librería 'trae', podemos usar sus métodos, en este caso get() para obtener los resultados mediante una petición HTTP */
    /* PARÁMETRO 1: get() recibe la url a buscar, en nuestro caso como ya tenemos la API en baseUrl solo debemos poner las partes específicas, como '/search'
       PARÁMETRO 2: Será un objeto que a su vez tendrá otro objeto llamado params, que serán parámetros que viajan dentro de la url del método get() HTTP */
    platziMusicService.get('/search', {
        /* Cuando la clave y el valor son iguales podríamos abreviarlo así -> params: { q,type } */
        params: { q: q, type: type }
    })

    /* Esta promesa devuelve un método then() que nos permite majenar la llamada asincrónica o el estado satisfactorio una vez la promesa termine
       (También otro catch() para saber cuando falla) */
    /* Haremos un callback mediante el método then() para obtener la respuesta de la API en caso satisfactorio y que haya ido bien.
       Pero escrita como una función de flecha, así aparte de escribir menos código mantenemos el valor léxico de this para cuando lo necesitemos */
    .then((respuesta) => {
        return respuesta.data
    })
    /* En este caso al ser una función de flecha de una sola línea, podemos omitir el return y las llaves:
       .then((respuesta) => respuesta.data)
        Pero como además solo tenemos un parámetro podemos omitir los paréntesis del parámetro:
        .then(respuesta => respuesta.data)
    */
}

/* Exportamos el servicio para poder ser usado desde fuera */
export default trackService