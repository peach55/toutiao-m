import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入Vant 组件及样式
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入全局样式
import '@/styles/index.less'

Vue.config.productionTip = false

// 将 Vant 注册为 Vue 的插件
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
