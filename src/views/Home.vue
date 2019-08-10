<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HomeMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from '@/components/HomeMain.vue'

export default {
  name: 'home',
  components: {
    HomeMain
  }
}
</script>
