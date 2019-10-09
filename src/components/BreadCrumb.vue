<template>
  <div class="bread-crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb'
}
</script>

<style scoped>
.bread-crumb {
  width: 100%;
  overflow: hidden;
  margin: 5px;
  padding: 10px;
  background: #ebf0f7;
  border-top: 1px solid rgb(238, 238, 238);
}

</style>
