<template>
  <main>
      <h1 class="text-center pt-24 text-white text-xl font-sub-heading uppercase"><span class="px-4 font-bold text-gray-800">01</span>Pick your destination</h1>
      <nav class="font-sub-heading text-lightBlue text-center font-medium my-8 uppercase space-x-8">
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" exact to="/moon">Moon</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/mars">Mars</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/europa">Europa</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/titan">Titan</router-link>
      </nav>
  </main>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
}
</script>
<style scoped>
a.router-link-active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
    color: white;
}
</style>