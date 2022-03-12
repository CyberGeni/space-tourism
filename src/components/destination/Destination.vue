<template>
  <main class="text-white">
      <h1 class="text-white text-xl font-sub-heading uppercase"><span class="px-4 text-gray-800">01</span>Pick your destination</h1>
      <nav class="md:w-3/4 md:flex md:justify-end" id="">
            <img class="hamburger absolute right-8 top-12 md:hidden h-auto w-auto" src="/src/assets/shared/icon-hamburger.svg" alt="">
            <ul class="menu hidden absolute right-0 space-y-8 w-2/3 pt-12 md:pt-0 md:space-y-0 px-8 h-screen md:w-fit uppercase tracking-wider text-lg font-sub-heading md:flex md:h-20 bg-white md:items-center md:space-x-8 lg:h-18 lg:space-x-12">
                <img class="absolute right-12 md:hidden" src="/src/assets/shared/icon-close.svg" alt="">
                <li>
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline hover:underline-offset-[30px]" exact="" to="/"><span class="font-bold mr-2">00</span>Home</router-link>
                <li>
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/destination"> <span class="font-bold mr-2">01</span>Destination</router-link>
                </li>
                <li>
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/crew"> <span class="font-bold mr-2">02</span>Crew</router-link>
                </li>
                <li class="pr-8">
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/technologies"> <span class="font-bold mr-2">03</span>Technology</router-link>
                </li>
            </ul>
        </nav> 
      <router-view></router-view>
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