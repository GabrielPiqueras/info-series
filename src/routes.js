import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import SerieDetail from '@/components/SerieDetail.vue'

import Login from '@/components/Login.vue'
import Registro from '@/components/Registro.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/serie/:id', component: SerieDetail, name: 'serie' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/registro', component: Registro, name: 'registro' }
]

export default routes;