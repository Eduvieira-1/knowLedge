import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkdWFyZG8gQ2VzYXIgU2lsdmVyaW8gVmllaXJhIiwiZW1haWwiOiJlZHVhcmRvQGhvdG1haWwuY29tLmJyIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4ODY3MzI1OSwiZXhwIjoxNjg4OTMyNDU5fQ.9NKBFa-wmk3flK0qKCNPIeQeXY1xxPh4vsobMmBoNHc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')