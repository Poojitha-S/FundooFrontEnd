import Login from '@/components/Login'
import Sample from '@/components/Sample'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/Sample',
        name: 'Sample',
        component: Sample
      }
    ]
  })