import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/features', component: FeaturesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
})

export default router