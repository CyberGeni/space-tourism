import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// CSS Library
import 'animate.css';

// Router components
import Home from './components/Home.vue'
import Destination from './components/destination/Destination.vue'
import Moon from './components/destination/Moon.vue'

// Router init
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
    {path: '/destination', component: Destination},
    {path: '/moon', component: Moon},
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})