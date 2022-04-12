import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


// CSS Library
import 'animate.css';

// Router components
import Home from './components/Home.vue'

// Destination components
import Destination from './components/destination/Destination.vue'
import Moon from './components/destination/Moon.vue'
import Mars from './components/destination/Mars.vue'
import Europa from './components/destination/Europa.vue'
import Titan from './components/destination/Titan.vue'

import Crew from './components/Crew.vue'
// import Technologies from './components/destination/.vue'



// Router init
Vue.use(VueRouter);
const router = new VueRouter({
  routes : [
    // essential routing of components  
    {path: '/', component: Home},
    {path: '/destination', component: Destination},
    {path: '/destination/moon', component: Moon},
    {path: '/destination/mars', component: Mars},
    {path: '/destination/europa', component: Europa},
    {path: '/destination/titan', component: Titan},
    // Crew
    {path: '/crew', component: Crew},
   // {path: '/technologies', component: Technologies},
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})