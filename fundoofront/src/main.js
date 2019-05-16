import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes:Routes
 });
 Vue.use(VueMaterial)
new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}) 
