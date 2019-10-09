<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  overflow: hidden;
}
</style>
