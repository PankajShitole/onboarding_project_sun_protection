import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UVView from '../views/UVView.vue'
import RecommendView from '../views/RecommendView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/uv',
    name: 'UV',
    component: UVView
  },
  {
    path: '/recommend',
    name: 'Recommendation',
    component: RecommendView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;


