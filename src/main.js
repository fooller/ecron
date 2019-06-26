import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import ecron from './index'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(ecron)
// Vue.component('ecron', ecron)


new Vue({
  render: h => h(App), 
}).$mount('#app')

