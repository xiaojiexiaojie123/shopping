// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LyTab from 'ly-tab'
import 'mint-ui/lib/style.css'
import './common/stylus/rewrite.styl'
import store from './store'

import { Swipe, SwipeItem, DatetimePicker, Actionsheet } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Actionsheet.name, Actionsheet)

Vue.use(LyTab)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
