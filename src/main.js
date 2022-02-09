import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/store";

import VueLazyload from "vue-lazyload";
import FastClick from 'fastclick'

// 解决移动端 300ms延迟  fastclick
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyload,{
  loading: require('@/assets/img/common/logo.svg')
})

// 导入封装的toast
import toast from "@/components/common/toast/index"

// 安装toast 插件
Vue.use(toast)

// vant 组件库使用
import { NavBar,Icon } from 'vant';

Vue.use(NavBar).use(Icon)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
