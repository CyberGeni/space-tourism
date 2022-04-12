<template>
    <main class="bg-[url('/src/assets/home/background-home-mobile.jpg')] md:bg-[url('/src/assets/home/background-home-tablet.jpg')] lg:bg-[url('/src/assets/home/background-home-desktop.jpg')] object-fit bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center lg:pt-36 lg:flex-row lg:px-20 lg:pt-16 lg:ma-auto lg:justify-around">
        <section class="text-center lg:text-left">
            <h3 class="uppercase font-sub-heading text-lightBlue tracking-widest mt-14">So, you want to travel to</h3>
            <h1 class="uppercase text-8xl md:text-9xl font-heading text-white my-4 sm:my-6">Space</h1>
            <p class="font-regular text-lightBlue leading-relaxed w-4/5 max-w-4xl mx-auto my-3 lg:mx-0 lg:max-w-lg">Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
        </section>
        <section class="md:flex md:justify-center lg:pt-36">
            <router-link to="/destination/moon">
                <div class="rounded-full w-40 h-40 md:w-48 md:h-48 flex items-center justify-center text-2xl uppercase font-heading text-deepBlue bg-white hover:ring-gray-200 hover:ring-opacity-20 hover:ring-[36px] transition-all my-6">    
                    Explore
                </div>        
            </router-link>
        </section>
    </main>
</template>
<script>

export default {
    components: {

    }
}
</script>

  
  
  

  
