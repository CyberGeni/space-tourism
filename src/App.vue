<template>
  <main class="h-screen bg-black">
      <app-header></app-header>
      <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'app-header': Header,
  }
}
</script>

