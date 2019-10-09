<template>
  <div class="header">
    <el-row>
      <el-col class="header-left" :span="6">
        <el-image class="logo" :src="url"></el-image>
      </el-col>
      <el-col style="text-align:center;" :span="12">
        <h3><router-link to="/">文章后台管理系统</router-link></h3>
      </el-col>
      <el-col :span="3">
        <div class="header-icon">
          <a href="#">
            <el-icon class="el-icon-user"></el-icon>
          </a>
          <a href="#">
            <el-icon class="el-icon-folder"></el-icon>
          </a>
          <a href="#">
            <el-icon class="el-icon-paperclip"></el-icon>
          </a>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="dropdown">
          <el-dropdown>
            <span class="el-dropdown-link">
              您好,
              <span class="username">管理员</span>
              <img class="avatar" :src="url" alt="" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import img from '../assets/images/404.png'

export default {
  data () {
    return {
      url: img
    }
  }
}
</script>

<style scoped>
.username{
  display: inline-block;
  color:#a9d86e;
  margin-left:10px;
}
.dropdown .avatar {
  position: absolute;
  top: 19%;
  width: 36px;
  height: 36px;
  margin-left: 5px;
  border-radius: 25px;
}
.dropdown{
  position: relative;
  overflow: hidden;
}
.header-icon a {
  width: 18px;
  height: 17px;
  padding: 5px;
  font-size: 18px;
  margin-right: 10px;
}
.header-icon {
  text-align: right;
  width: 156px;
  line-height: 60px;
  padding: 0 10px;
}
.logo {
  width: 36px;
  height: 36px;
  margin-top: 10px;
  border-radius: 25px;
}
.header {
  overflow: hidden;
  width: 100%;
  height: 60px;
  padding: 0 10px;
  line-height: 60px;
}
.header a {
  text-decoration: none;
  color:#93b7e3
}
.header-left {
  line-height: 60px;
}
</style>
