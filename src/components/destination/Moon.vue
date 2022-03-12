<template>
  <main class="h-screen text-white bg-[url('/src/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/src/assets/destination/background-destination-desktop.jpg')] bg-no-repeat bg-cover">
  </main>
</template>

<script>
import DestinationNavbar from './DestinationNavbar.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'destination-navbar': DestinationNavbar,
  }
}
</script>