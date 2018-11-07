import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: routes
  // es6 syntax below:
  routes,
  mode:'history',    //default mode = 'hash' mode with hashtag in the url path ; 'history' mode without hashtag
  
  // scroll to a specific position, and with savedPosition which is used when user return to the previous page
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
    
    if (to.hash) {
      return {selector: to.hash};
    }
    // this is alternative
    // return {x:0, y:700};
    
    // scroll to the top
    return {x:0, y:0};
  }
});




// beforeEnter Guard
router.beforeEach((to, from, next) =>{
  console.log('global beforeEach');
  next();
})



new Vue({
  el: '#app',
  // router:router,  --/ es6 syntax in effect if the string in key-value pair are the same
  router,
  render: h => h(App)
})
