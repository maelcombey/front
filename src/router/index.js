import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
