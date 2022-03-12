<template>
    <main class="flex flex-col my-auto h-screen bg-[url('/src/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/src/assets/crew/background-crew-desktop.jpg')] bg-no-repeat bg-cover">
    <h1><span>02</span>MEET YOUR CREW</h1>
    <div id="image-slider" class="splide">
        <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img src="image01.jpg">
                    </li>
                    <li class="splide__slide">
                        <img src="image02.jpg">
                    </li>
                    <li class="splide__slide">
                        <img src="image03.jpg">
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
        padding: 6rem;
        display: flex;
        justify-content: center;
        background: transparent;
      }

      .splide__slide__container {
        width: 600px;
        text-align: center;
      }

      .slide__content {
        margin: 1rem 0;
        font-size: 1.3rem;
      }

      .slide-img__wrapper {
        display: flex;
        align-items: center;
      }

      .slide-img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        max-width: 100%;
        max-height: 100%;
      }

      .slide-img__caption {
        margin-left: 1rem;
      }

      .slide-img__caption span {
        color: white;
        font-weight: 500;
      }

      /* Adding custom styling to the pagination */
      .splide__pagination__page {
          background: white;
          opacity: 0.5;
      }
      .splide__pagination__page.is-active {
        /* here I have changed the scale from 1.4 to 1.5 */
        transform: scale(1.5);
        /* changed from default bg-color to blue */
        background: white;
      }
    </style>