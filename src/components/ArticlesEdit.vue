<template>
  <div class="articles-addnews">
    <el-form :model="editArticle">
      <el-form-item label="ID：">
        <el-button type="text" disabled >{{editArticle._id}}</el-button>
      </el-form-item>
      <el-form-item label="发布时间：">
        <el-button type="text"> {{editArticle.date}} </el-button>
      </el-form-item>
      <el-form-item label="文章所属的分类：">
        <el-button
          v-for="item in editArticle.categories"
          :key="item"
          type="success"
          size="small"
          style="margin-right:10px" > {{item}} </el-button>
        <br>
        <el-select v-model="editArticle.selectValue" multiple  placeholder="请选择" style="margin: 10px 0 0 110px">
          <el-option v-for="item in allCategory" :key="item.label" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题：">
        <el-input v-model="editArticle.title" :placeholder="editArticle.title"></el-input>
      </el-form-item>
      <el-form-item label="文章作者：">
        <el-input v-model="editArticle.author" placeholder="editArticle.author"></el-input>
      </el-form-item>
      <el-form-item label="文章浏览数/收藏数（默认不被修改）：">
        <el-button type="text" size="small">{{editArticle.readCount}} / {{editArticle.collectCount}}</el-button>
      </el-form-item>
      <el-form-item label="文章内容：">
        <el-input type="textarea" :rows="5" v-model="editArticle.body" :placeholder="editArticle.body"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="updateArticles()">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'articles-edit',
  data () {
    return {
      allCategory: '',
      editArticle: {}
    }
  },
  methods: {
    // 修改文章
    updateArticles () {
      this.editArticle.categories = this.editArticle.selectValue
      this.editArticle.selectValue = []
      this.$http.put(`articles`, this.editArticle).then(res => {
        this.$router.push('/articles/detail')
      })
    }
  },
  created () {
    // 获取文章所有分类
    this.$http.get('category').then(res => {
      this.allCategory = res.data
    })
    // 获取传过来id值的文章数据
    this.$http.get(`articles/${this.$route.query.id}`).then(res => {
      this.editArticle = res.data
    })
  }
}
</script>
