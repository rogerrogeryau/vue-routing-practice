import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: routes
  // es6 syntax below:
  routes,
  mode:'history'    //default mode = 'hash' mode with hashtag in the url path ; 'history' mode without hashtag
});



new Vue({
  el: '#app',
  // router:router,  --/ es6 syntax in effect if the string in key-value pair are the same
  router,
  render: h => h(App)
})
