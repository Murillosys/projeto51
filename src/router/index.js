import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrinho',
    name: 'Carrinho ',
    component: () => import('../components/Carrinho.vue')
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: () => import('../components/Pedido.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
