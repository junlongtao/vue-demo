import Vue from 'vue'
import router from './router'
import App from './components/App'

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
