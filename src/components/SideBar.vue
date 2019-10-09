<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router  :default-openeds="['content']" default-active="/articles/detail">
          <el-submenu index="content">
            <template slot="title">
              <i class="el-icon-document"></i>
              文章管理
            </template>
            <el-menu-item index="/articles/detail">文章详情</el-menu-item>
            <el-menu-item index="/articles/categories">文章分类</el-menu-item>
            <el-menu-item index="/articles/add">新建文章</el-menu-item>
          </el-submenu>
          <el-submenu index="personMsg">
            <template slot="title">
              <i class="el-icon-info"></i>
              信息管理
            </template>
              <el-menu-item index="">
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="">
                <span slot="title">修改信息</span>
              </el-menu-item>
          </el-submenu>
          <el-submenu index="errorPage">
            <template slot="title">
              <i class="el-icon-error"></i>
              错误页面
            </template>
              <el-menu-item index="">
                <span slot="title">401 无权限</span>
              </el-menu-item>
              <el-menu-item index="">
                <span slot="title">404 无资源</span>
              </el-menu-item>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title">权限设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style>
.el-aside {
  color: #333;
  float: left;
  margin-top: 4.5px;
  border-top: 1px solid rgb(238, 238, 238);
}
</style>
