<template>
    <main class="overflow-hidden flex flex-col justify-center  my-auto h-screen bg-[url('/src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover">
    <h1 class="text-white text-center text-lg font-sub-heading tracking-widest mt-20 md:text-left md: md:ml-8"><span class="text-gray-500 font-medium px-3">02</span>MEET YOUR CREW</h1>
    <div id="image-slider" class="splide">
        <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide flex flex-col justify-center items-center text-center md:flex-col-reverse lg:flex-row-reverse lg:text-left">
                        <img class="w-56 md:w-72" src="/src/assets/crew/image-douglas-hurley.png" alt="">
                         <div class="details  border-t-[0.01em] border-gray-500 pt-4 md:border-t-0 lg:w-4/5 lg:mx-auto">
                            <h2 class="font-heading mt-7 text-xl text-gray-400">COMMANDER</h2>
                            <h1 class="font-heading mt-3 text-2xl font-medium text-white">DOUGLAS HURLEY</h1>
                            <p class="w-4/5 mx-auto font-regular leading-relaxed text-lightBlue text-center lg:text-left">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        </div>
                    </li>
                    <li class="splide__slide flex flex-col justify-center items-center text-center md:flex-col-reverse lg:flex-row-reverse lg:text-left">
                        <img class="w-56 lg:flex-row md:w-72" src="/src/assets/crew/image-mark-shuttleworth.png" alt="">
                        <div class="details border-t-[0.01em] border-gray-500 pt-4 md:border-t-0 lg:w-4/5 lg:mx-auto" >
                            <h2 class="font-heading mt-8 text-xl text-gray-400">MISSION SPECIALIST</h2>
                            <h1 class="font-heading mt-3 text-2xl font-medium text-white">MARK SHUTTLEWORTH</h1>
                            <p class="w-4/5 mx-auto font-regular leading-relaxed text-lightBlue text-center lg:text-left">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                        </div>
                    </li>
                    <li class="splide__slide flex flex-col justify-center items-center text-center md:flex-col-reverse lg:flex-row-reverse lg:text-left">
                        <img class="w-56 md:w-72" src="/src/assets/crew/image-victor-glover.png" alt="">
                         <div class="details border-t-[0.01em] border-gray-500 pt-4 md:border-t-0 lg:w-4/5 lg:mx-auto">
                            <h2 class="font-heading mt-8 text-xl text-gray-400">PILOT</h2>
                            <h1 class="font-heading mt-3 text-2xl font-medium text-white">VICTOR GLOVER</h1>
                            <p class="w-4/5 mx-auto font-regular leading-relaxed text-lightBlue text-center lg:text-left">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                        </div>
                    </li>
                    <li class="splide__slide flex flex-col justify-center items-center text-center md:flex-col-reverse lg:flex-row-reverse lg:text-left lg:text-left">
                        <img class="w-56 md:w-72" src="/src/assets/crew/image-anousheh-ansari.png" alt="">
                        <div class="details border-t-[0.01em] border-gray-500 pt-4 md:border-t-0 lg:w-4/5 lg:mx-auto">
                            <h2 class="font-heading mt-8 text-xl text-gray-400">FLIGHT ENGINEER</h2>
                            <h1 class="font-heading mt-3 text-2xl font-medium text-white">ANOUSHEH ANSARI</h1>
                            <p class="w-4/5 mx-auto font-regular leading-relaxed text-lightBlue text-center lg:text-left">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style>
      .splide__slide {
        display: flex;
        justify-content: center;
        background: transparent;
      }
      /* Adding custom styling to the pagination */
      .splide__pagination {
        z-index: 1;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
      }
      .splide__pagination li {
        margin-right: 8px;
      }
      .splide__arrow {
          opacity: 0.4;
          background: rgba(98, 98, 100, 0.192);
      }
      .splide__pagination__page{
          margin-top: -250rem;
          background: white;
          opacity: 0.5;
      }
      .splide__pagination__page.is-active {
        /* here I have changed the scale from 1.4 to 1.5 */
        transform: scale(1.5);
        /* changed from default bg-color to blue */
        background: white;
      }
      .details {
          background-color: rgba(255, 255, 255, 0.050 bt-1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
      }
    </style>