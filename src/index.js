import Vue from 'Vue'
import App from './App.vue'
import router from './router'

import 'reset-css';
import './css/base.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

