<template>
  <div class="show-msg">
    <el-row>
      <el-col :offset="1" :span="6">
        <el-card class="avatar">
          <el-row>
            <el-col :span="6"><el-tag>修改头像</el-tag></el-col>
            <el-col :span="18">
              <el-row><img :src="url" alt="img"></el-row>
              <el-row>
                <el-button
                class="upload"
                type="success"
                size="mini"
                >
                  上传
                  <i class="el-icon-upload el-icon--right"></i>
                </el-button>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :offset="1" :span="12">
        <el-card shadow="hover">
          <el-tag style="margin-bottom:20px;">个人信息详情</el-tag>
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <i class="header-icon el-icon-user-solid"></i> 用户名
              </template>
              <div>黄小侯</div>
              <div style="color:#909399">一名前端工程师，能守能功！</div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                <i class="header-icon el-icon-warning"></i> 权限
              </template>
              <div>普通管理员</div>
            </el-collapse-item>
            <el-collapse-item>
                <template slot="title">
                <i class="header-icon el-icon-s-comment"></i> 绑定邮箱
              </template  >
              <div>2105481785@163.com</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import avatar from '../assets/avatar.jpg'
export default {
  name: 'ShowMsg',
  data () {
    return {
      url: avatar
    }
  }
}
</script>

<style scoped>
.avatar{
  text-align: center;
}
.avatar img{
  border-radius: 25px;
  width: 120px;
  height: 120px;
  border: 1px solid #eee;
}
.upload {
  margin: 10px;
}
</style>
