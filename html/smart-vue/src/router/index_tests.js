import PaginaInicial from '../views/PaginaInicial.vue'
import DetalhesCustomer from '../views/DetalhesCustomer.vue'

  export default [
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
