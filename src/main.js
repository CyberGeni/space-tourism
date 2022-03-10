import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// CSS Library
import 'animate.css';

// Router components
import Home from './components/Home.vue'

// Router init
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})