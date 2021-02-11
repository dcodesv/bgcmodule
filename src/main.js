import Vue from 'vue'
import App from './App.vue'
import store from './store'
//VueRouter
import router from './router'
import 'remixicon/fonts/remixicon.css'
import '@/styles/tailwind.css'
import '@/styles/App.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
