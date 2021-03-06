import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons/iconfont.css'
import '@/assets/global.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
