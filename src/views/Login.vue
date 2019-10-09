<template>
  <div class="login">
    <div id="u1234" class="ax_default" data-label="背景" style="left: 0px; width: 1536px;">
      <div id="u1234_state0" class="panel_state" data-label="State1" style="width: 1536px;">
        <div id="u1234_state0_content" class="panel_state_content" style="margin-left: 0px;"></div>
      </div>
    </div>
    <!-- 登录面板 -->
    <div class="login-panel">
      <div class="login-form">
        <hr class="hr">
        <div class="title">
          <span>文章后台业务管理系统</span>
        </div>
        <el-form class="form" res="form" :model="loginForm">
          <el-form-item>
            <el-input
              size="medium"
              v-model="loginForm.username"
              prefix-icon="el-icon-s-custom"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              size="medium"
              v-model="loginForm.password"
              prefix-icon="el-icon-info"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item style="text-align:center">
             <el-button type="primary" @click="submitForm('form')">提交</el-button>
             <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginBg from '../assets/images/login_bg.png'
export default {
  name: 'Login',
  data () {
    return {
      url: loginBg,
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.form{
  padding: 10px;
}
.title{
  text-align: center;
  margin: 100px 40px 20px;
}
.title span{
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: rgba(0, 153, 255, 0.988235294117647);
}
.hr{
  width: 100%;
  height: 10px;
  background:rgba(7, 137, 224, 0.988)
}
/* 登录面板 */
.login-panel{
  position: absolute;
  width: 350px;
  height: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
  z-index: 1001;
  overflow: hidden;
  background: green;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.349019607843137);
}
.login-form{
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
}

/* 背景图片 */
#u1234_state0_content {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1px;
  height: 1px;
}
#u1234_state0 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1100px;
  height: 220px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(0, 153, 255, 0.988235294117647);
  background-image: url(../assets/images/login_bg.png);
  background-position: right top;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 2000px 360px;
}
#u1234 {
  position: fixed;
  left: 0px;
  top: 50%;
  margin-top: -170px;
  width: 1100px;
  height: 220px;
  overflow: hidden;
}
body {
  margin: 0px;
  background-color: rgba(249, 249, 249, 1);
  background-image: none;
  position: relative;
  left: -0px;
  width: 1100px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
