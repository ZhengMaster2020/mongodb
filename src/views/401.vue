<template>
  <div class="fillcontain" >
      <div class="contain" ref="contain">
        <div class="errPage-container cflex wflex">
            <img class="errorImg" :src="url" />
            <p class="errorTitle">401</p>
            <p class="errorTip">抱歉,您没有权限访问该页面。</p>
            <router-link :to="{path: '/'}">
              <el-button size="mini" type="primary">返回首页</el-button>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import notAuth from '../assets/401.png'
export default {
  data () {
    return {
      url: notAuth
    }
  }
}
</script>

<style>
.fillcontain{
  text-align: center;
}
.errorTitle{
  color: rgba(0, 0, 0, 0.85);
  font-size: 24px;
}
.errorTip {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  margin: 10px;
}
</style>
