import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'

import { Button } from 'mint-ui'

import './mock/MockServer'

Vue.use(MintUI)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
