import { createRouter, createWebHistory } from 'vue-router'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
