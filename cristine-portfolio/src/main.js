import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'
import AOS from "aos";
import "aos/dist/aos.css";

var VueCookie = require('vue-cookie');

/* Bootstrap 5 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VTooltip)
Vue.use(VueCookie)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]


const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
