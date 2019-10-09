<template>
  <div class="home">
    <el-row>
      <el-col :span="3"><SideBar/></el-col>
      <el-col :span="21"> <HomeMain/></el-col>
    </el-row>
  </div>
</template>

<script>
import HomeMain from '@/components/HomeMain.vue'

export default {
  name: 'home',
  components: {
    HomeMain
  }
}
</script>
