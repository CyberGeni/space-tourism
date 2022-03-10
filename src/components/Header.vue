<template>
    <header class="absolute z-100 text-white flex justify-between w-full h-fit">
        <img class="h-fit" src="/src/assets/shared/logo.svg" alt="">
        <nav id="">
            <img class="hamburger h-auto w-auto" src="/src/assets/shared/icon-hamburger.svg" alt="">
            <ul class="menu">
                <img src="/src/assets/shared/icon-close.svg" alt="">
                <li>
                    <router-link to="/">00 Home</router-link>
                </li>
                <li>
                    <router-link to="/destination">01 Destination</router-link>
                </li>
                <li>
                    <router-link to="/crew">02 Crew</router-link>
                </li>
                <li>
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
