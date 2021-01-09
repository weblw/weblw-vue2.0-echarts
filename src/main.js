import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.scss'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const echarts = require('echarts')
Vue.prototype.$echarts = echarts
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
