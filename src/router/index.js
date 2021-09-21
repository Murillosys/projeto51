import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Carrinho from '../views/Carrinho.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: Carrinho
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
