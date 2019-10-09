<template>
  <div class="home-main">
    <el-col><BreadCrumb/></el-col>
    <el-container style="border: 1px solid #eee">
      <el-main style="padding:0">
        <div class="main-content">
        <router-view/>
        </div>
        <Footer/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>

 <style>
 .main-content{
  min-height: 500px;
  padding: 20px;
 }
 .home-main{
   width: 100%;
   overflow: hidden;
 }
</style>
