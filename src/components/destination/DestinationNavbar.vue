<template>
  <main class="absolute mt-32 mx-auto w-full">
      <h1 class="text-center text-white text-xl font-sub-heading uppercase"><span class="px-4 font-bold text-gray-00">01</span>Pick your destination</h1>
      <nav class="font-sub-heading text-lg tracking-wide text-lightBlue text-center font-medium my-8 uppercase space-x-6 md:space-x-7 lg:space-x-8">
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/destination/moon">Moon</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/destination/mars">Mars</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/destination/europa">Europa</router-link>
          <router-link class="hover:underline hover:underline-offset-8 hover:decoration-2 transition-all" to="/destination/titan">Titan</router-link>
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