<template>
    <header class="absolute z-100 text-white flex justify-between items-center md:px-0 md:py-0 md:md:items-center w-full md:mx-auto flex md:justify-between h-fit lg:mt-12">
        <img class="absolute px-8 mt-32 md:mt-24 md:pl-6 lg:pl-12 h-fit" src="/src/assets/shared/logo.svg" alt="">
        <div class="hidden absolute z-100 lg:mt-20 lg:ml-36 lg:flex lg:w-[50%] lg:mx-auto lg:h-[1px] opacity-30 lg:bg-white"></div>
        <nav class="md:w-3/4 md:flex md:justify-end" id="">
            <a @click="toggle" class="icon hover:cursor-pointer">
                <img class="absolute right-8 top-12 md:hidden h-auto w-auto" src="/src/assets/shared/icon-hamburger.svg" alt="">
            </a>
            <ul :class="[isActive ? 'block':'hidden']" class="absolute right-0 space-y-8 w-2/3 pt-12 md:pt-0 md:space-y-0 px-8 h-screen md:w-fit uppercase tracking-wider text-lg font-sub-heading md:flex md:h-20 bg-white md:items-center md:space-x-8 lg:h-18 lg:space-x-12">
                <img @click="toggle" class="absolute right-8 md:hidden w-7" src="/src/assets/shared/icon-close.svg" alt="">
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
        
    </header>
    
</template>

<script>

export default {
    data() {
        return {
           isActive: false
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        }
    },
}
</script>
<style scoped>
nav ul {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}
@media (min-width: 768px) {
    .router-link-active{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 30px;
}
}
    
</style>
