<template>
  <div class="home-main">
    <el-container style="height: 100vh; border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router  :default-openeds="['content']" default-active="/articles/detail">
          <el-submenu index="content">
            <template slot="title">
              <i class="el-icon-document"></i>
              内容管理
            </template>
            <el-menu-item-group>
              <template slot="title">文章管理</template>
              <el-menu-item index="/articles/detail">文章详情</el-menu-item>
              <el-menu-item index="/articles/categories">文章分类</el-menu-item>
              <el-menu-item index="/articles/add">新建文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
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
.el-aside {
  color: #333;
}
</style>
