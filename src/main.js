// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as echarts from 'echarts'
import './assets/globalCss/global.css'
import BaiduMap from 'vue-baidu-map'
import './assets/icon/iconfont.css'


Vue.use(VueRouter,VueAxios,axios,echarts)
Vue.use(ElementUi)
// Vue.prototype.axios = true
Vue.config.productionTip = false
Vue.use(BaiduMap,{ak:'ovNhzNZ8yBWsOQIvrdPssXParv3Srf1z'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  render: h => h(App)
})

