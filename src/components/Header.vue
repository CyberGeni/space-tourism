<template>
    <header class="absolute z-1000 text-white flex justify-between items-center md:px-0 md:py-0 md:md:items-center w-full md:mx-auto flex md:justify-between h-fit lg:mt-12 ">
        <img class="absolute px-8 mt-32 md:mt-24 md:pl-6 lg:pl-12 h-fit" src="/src/assets/shared/logo.svg" alt="">
        <div class="hidden absolute z-100 lg:mt-20 lg:ml-36 lg:flex lg:w-[50%] lg:mx-auto lg:h-[1px] opacity-95 lg:bg-white"></div>
        <nav class="md:w-3/4 md:flex md:justify-end" id="">
            <a @click="toggle" class="icon hover:cursor-pointer">
                <img class="absolute right-8 top-12 md:hidden h-auto w-auto" src="/src/assets/shared/icon-hamburger.svg" alt="">
            </a>
            <!-- here, i created an if-else statement that binds the class to a variable already created.<style scoped>
                 if it's active, it will toggle those classes and if not, toggle the ones after the colon -->
            </style>
            <ul :class="[isActive ? 'block hide_overflow animate__animated animate__bounceInRight':'hidden']" class="z-10000 absolute right-0 space-y-8 w-2/3 pt-12 md:pt-0 md:space-y-0 px-8 h-screen md:w-fit uppercase tracking-wider text-lg font-sub-heading md:flex md:h-20 bg-white md:items-center md:space-x-8 lg:h-18 lg:space-x-12">
                <img @click="toggle" class="absolute right-8 md:hidden w-7" src="/src/assets/shared/icon-close.svg" alt="">
                <li @click="isActive = !isActive">
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline hover:underline-offset-[30px]" exact="" to="/"><span class="font-bold mr-2">00</span>Home</router-link>
                <li @click="isActive = !isActive">
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/destination"> <span class="font-bold mr-2">01</span>Destination</router-link>
                </li>
                <li @click="isActive = !isActive">
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/crew"> <span class="font-bold mr-2">02</span>Crew</router-link>
                </li>
                <li @click="isActive = !isActive" class="pr-8">
                    <router-link class="md:hover:decoration-2 md:hover:decoration-zinc-500 md:hover:underline md:hover:underline-offset-[30px]" to="/technologies"> <span class="font-bold mr-2">03</span>Technology</router-link>
                </li>
            </ul>
        </nav> 
        
    </header>
    
</template>
<style scoped>
.hide_overflow {
    overflow: hidden !important;
}
</style>
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
