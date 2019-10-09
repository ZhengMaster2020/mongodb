<template>
  <div class="modify-msg">
    <el-tabs type="border-card">
      <el-tab-pane label="修改信息">
        <el-form ref="form" label-width="120px" label-position="right" :model="form">
          <el-form-item label="用户名" prop="name">
            <el-input disabled v-model="form.name"></el-input>
           </el-form-item>
          <el-form-item label="个性签名" prop="signature">
            <el-input v-model="form.signature"></el-input>
           </el-form-item>
          <el-form-item label="绑定邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
           </el-form-item>
          <el-form-item size="large">
            <el-button type="primary">提交</el-button>
            <el-button  @click="resetForm('form')">重置</el-button>
           </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="修改密码">
        <el-form ref="modifyPwdForm" label-width="120px" label-position="right" :model="modifyPwdForm">
          <el-form-item label="原密码" prop="password">
            <el-input v-model="modifyPwdForm.password"></el-input>
           </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="modifyPwdForm.newPassword"></el-input>
           </el-form-item>
          <el-form-item label="确认新密码" prop="newPassword2">
            <el-input v-model="modifyPwdForm.newPassword"></el-input>
           </el-form-item>
          <el-form-item size="large">
            <el-button type="primary">提交</el-button>
            <el-button  @click="resetForm('form')">重置</el-button>
           </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ModifyMsg',
  data () {
    return {
      form: {
        name: '',
        signature: '',
        email: ''
      },
      modifyPwdForm: {
        password: '',
        newPassword: '',
        newPassword2: ''
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.modify-msg{
  width: 93%;
  text-align: center;
  margin: 0 auto;
}
</style>
