import { createRouter, createWebHashHistory } from 'vue-router'
import Produto from '../comments/Produto.vue'
import Carrinho from '../comments/Carrinho.vue'

const routes = [
  {
    path: '/',
    name: 'Produto',
    component: Produto
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
