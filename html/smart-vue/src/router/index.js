import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import DetalhesCustomer from '../views/DetalhesCustomer.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'pagina-inicial',
    component: PaginaInicial
  },
  {
    path: '/detalhes-customer',
    name: 'detalhes-customer',
    component: DetalhesCustomer,
    props: (route) => ({
      ...route.params
    })
  }
]

const router = new VueRouter({
  routes
})

export default router
