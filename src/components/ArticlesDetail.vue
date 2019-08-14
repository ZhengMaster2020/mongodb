<template>
  <div class="articles-name">
    <el-row>
      <el-col :span="12"><el-tag type="success" effect="light">所有文章</el-tag></el-col>
      <el-col :span="2" :offset="10"><el-button type="primary" @click="addArticle" size="small">添加</el-button></el-col>
    </el-row>
    <el-table :data="articles" >
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="_id" label="ID" ></el-table-column>
      <el-table-column prop="date" label="发布日期" ></el-table-column>
      <el-table-column prop="title" label="文章标题" width="120"></el-table-column>
      <el-table-column prop="categories" label="文章分类" width="100">
         <template slot-scope="scope">
          <el-button type="success" size="mini" palin round disabled v-for="item in scope.row.categories" :key="item.label">
            {{item.label}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="文章作者" width="120"></el-table-column>
      <el-table-column prop="readCount" label="阅读数" width="100"></el-table-column>
      <el-table-column prop="collectCount" label="收藏数" width="100"></el-table-column>
      <el-table-column prop="body" label="文章内容"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row._id)" type="success" size="small">编辑</el-button>
        <el-button @click="handleDelete(scope.row._id)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'articles-detail',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    fetchDate () {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    handleEdit (id) {
      this.$router.push('/articles/edit')
    },
    handleDelete (id) {
      this.$http.delete(`articles/${id}`).then((req, res) => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.fetchDate()
      })
    },
    addArticle () {
      this.$router.push('/articles/add')
    }
  },
  created () {
    this.fetchDate()
  }
}
</script>

<style scoped>
.el-button{
  margin-top: 20px;
}
</style>
