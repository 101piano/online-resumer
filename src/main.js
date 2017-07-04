// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './i18n/'
import store from './store/index'

import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'

var locales = i18n
Vue.use(VueI18n)
Vue.config.lang = 'zh_CN'

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


