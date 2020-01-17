import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainlayout',
      component: () => import('../components/Mainlayout'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/Home')
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import('../views/Categories')
        },
        {
          path: '/history',
          name: 'history',
          component: () => import('../views/History')
        },
        {
          path: '/planing',
          name: 'planing',
          component: () => import('../views/Planing')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/Profile.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },

  ]
})
