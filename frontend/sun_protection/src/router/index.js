import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../views/Homeview.vue'
import Aboutview from '../views/Aboutview.vue'
import UVview from '../views/UVview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homeview
  },
  {
    path: '/about',
    name: 'About',
    component: Aboutview
  },
  {
    path: '/uv',
    name: 'UV',
    component: UVview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;