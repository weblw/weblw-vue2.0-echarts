import Vue from 'vue'
import VueRouter from 'vue-router'
import EchartsLayout from '@/layout/echarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/echarts/pie',
    name: 'home'
  },
  {
    path: '/echarts',
    name: 'layout',
    component: EchartsLayout,
    children: [
      {
        path: 'pie',
        name: 'pie',
        component: () => import('../views/pie/index.vue')
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/line/index.vue')
      },
      {
        path: 'guage',
        name: 'guage',
        component: () => import('@/views/guage/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
