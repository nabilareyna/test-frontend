import Vue from 'vue'
import VueRouter from 'vue-router'
// import DetailFaktur from '../views/DetailFaktur.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mainpage',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/',
    name: 'DetailPembayaran',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailPembayaran.vue')
  },
  {
    path: '/detail',
    name: 'DetailFaktur',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailFaktur.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
