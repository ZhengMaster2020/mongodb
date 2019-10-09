<template>
  <div class="not-found">
    <img :src="notFound" alt="404 not found">
    <h3>不好意思，页面丢失了。。。</h3>
  </div>
</template>

<script>
import notFound from '../assets/images/404.png'
export default {
  name: 'notFound',
  data () {
    return {
      notFound
    }
  }
}
</script>

<style scoped>
.not-found{
  text-align: center;
  margin: 20px;
  color: rgb(151, 148, 148);
}
</style>
