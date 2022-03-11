<template>
    <header class="absolute z-100 text-white md:md:items-center w-full md:mx-auto flex md:justify-between h-fit ">
        <img class="md:pl-6 h-fit" src="/src/assets/shared/logo.svg" alt="">
        <nav class="md:w-3/4 md:flex md:justify-end" id="">
            <img class="hamburger md:hidden h-auto w-auto" src="/src/assets/shared/icon-hamburger.svg" alt="">
            <ul class="menu md:flex md:h-20 bg-white md:items-center md:space-x-8">
                <img class="md:hidden" src="/src/assets/shared/icon-close.svg" alt="">
                <li>
                    <router-link to="/">00 Home</router-link>
                </li>
                <li>
                    <router-link to="/destination">01 Destination</router-link>
                </li>
                <li>
                    <router-link to="/crew">02 Crew</router-link>
                </li>
                <li class="pr-8">
                    <router-link to="/technologies">03 Technology</router-link>
                </li>
            </ul>
        </nav> 
    </header>
</template>

<script>

export default {
    
}
</script>
<style scoped>
nav ul {
    background-color: rgb(255, 255, 255, 0.4);
    backdrop-filter: blur (81.5px);
    -webkit-backdrop-filter: blur(81.5px);
}
</style>
