<template>
  <div class="footer">
    <p class="intro">
      <span>zhengmaster 文章后台管理系统</span>
      <a href="https://github.com/wdlhao/vue2-element-touzi-admin" target="_blank">
        <i class="el-icon-share share-icon"></i>
      </a>
      <span>weixin876263508(微信号)</span>
    </p>
    <p class="beian">粤ICP备19008612号</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.share-icon {
  display: inline-block;
  width: 17px;
  height: 17px;
  font-size: 16px;
  background: rgb(69, 178, 154);
  color: #fff;
  margin-left: 10px;
  padding: 2px;
  border-radius: 25px;
}
.footer {
  width: 100%;
  min-height: 80px;
  padding: 10px 0;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid rgb(172, 170, 170);
}
.footer .intro {
  margin-top: 15px;
  display: inline-block;
}
.footer .intro a{
  margin: 0 10px 0 0;
  text-decoration: none;
}
.footer p {
  line-height: 30px;
}
</style>
