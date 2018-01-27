import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import 'mdi/css/materialdesignicons.min.css'

Vue.use(VueAxios, Axios)
Vue.use(Vuetify, {
  theme: {
    primary: '#000',
    secondary: '#333',
    accent: '#8c9eff',
    error: '#b71c1c',
  },
})

if (process.env.CORDOVA) {
  console.log(process.env.CORDOVA)
  document.addEventListener('deviceready', function () {
    Vue.prototype.$cordova = cordova
  }, false)

  var tag = document.createElement('script')
  tag.type = 'text/javascript'
  document.body.appendChild(tag)
  tag.src = 'cordova.js'
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  template: '<app/>',
  router,
  store,
})
