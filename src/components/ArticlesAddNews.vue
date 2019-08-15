<template>
  <div class="articles-addnews">
    <el-form :model="newArticle">
      <el-form-item label="文章标题">
        <el-input v-model="newArticle.title"  placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章作者">
        <el-input v-model="newArticle.author"  placeholder="请输入作者名称"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <template>
          <el-select v-model="newArticle.selectValue" multiple clearable  placeholder="请选择的分类">
            <el-option v-for="item in newArticle.categories" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" placeholder="编辑你的文章内容" :autosize="{minRows:2, mavRows:6}" v-model="newArticle.body"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addNewArticles">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'articles-addnews',
  data () {
    return {
      newArticle: {
        date: new Date(),
        title: '',
        author: '',
        categories: [],
        selectValue: '',
        body: ''
      }
    }
  },
  methods: {
    // 初始化 获取文章所有类型
    fetchArticlesCategory () {
      this.$http.get('category').then(res => {
        this.newArticle.categories = res.data
      })
    },
    // 新增文章
    addNewArticles () {
      this.newArticle.categories = this.newArticle.selectValue
      this.$http.post('articles', this.newArticle).then(res => {
        this.$message({
          type: 'success',
          message: '添加成功',
          center: true
        })
        this.$router.push('/articles/detail')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.fetchArticlesCategory()
  }
}
</script>
