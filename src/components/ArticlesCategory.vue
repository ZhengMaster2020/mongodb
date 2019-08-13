<template>
  <div class="articles-category">
    <el-tag type="success" effect="light">文章所有分类</el-tag>
    <el-card style="height:70px;">
      <el-tag
        type="danger"
        closable
        effect="dark"
        v-for="item in article.category"
        :key="item.value"
        @close="removeCategory(item)"
        >
        {{item.label}}
      </el-tag>
    </el-card>
    <el-form :model="article">
      <el-form-item label="新增类型">
        <el-input v-model="article.newCategory" placeholder="请输入类型"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addNewCategory">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'articles-category',
  data () {
    return {
      article: {
        newCategory: '',
        category: []
      }
    }
  },
  methods: {
    // 新增文章类型
    addNewCategory () {
      // 判断用户输入的内容是否为空
      if (!this.article.newCategory) {
        this.$message.error('输入内容不能为空')
      } else {
        // 新增一个对象 并将用户新增的新增类型的值作为对象的值
        // 并且插入到 article.category中
        const newCategory = Object.defineProperties({}, {
          value: {
            value: this.article.newCategory,
            writable: true
          },
          label: {
            value: this.article.newCategory,
            writable: true
          }
        })
        this.article.category.push(newCategory)
        this.article.newCategory = ''
        this.$message.success('添加成功')
      }
    },
    // 删除文章类型
    removeCategory (tag) {
      this.article.category.splice(this.article.category.indexOf(tag), 1)
      this.$message.success('删除成功')
    }
  }
}
</script>

<style scoped>
.el-tag{
  margin-bottom: 20px;
  margin-right: 20px;
}
.el-card{
  margin: 10px 20px 20px 10px;
}
</style>
