<template>
  <div class="articles-name">
    <el-row>
      <el-col :span="12"><el-tag t10ype="success" effect="light">所有文章</el-tag></el-col>
      <el-col :span="4" :offset="8">
        <el-button type="primary" round @click="addArticle" icon="el-icon-plus" plain size="small">添加</el-button>
        <el-button type="primary" round @click="searchArticle" icon="el-icon-search" plain size="small">查找</el-button>
      </el-col>
    </el-row>
    <el-table :data="articles" >
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="_id" label="ID" ></el-table-column>
      <el-table-column prop="date" label="发布日期" width="110" ></el-table-column>
      <el-table-column prop="title" label="文章标题" width="120"></el-table-column>
      <el-table-column prop="categories" label="文章分类" width="160">
         <template slot-scope="scope">
          <el-button type="success" size="mini" palin round disabled v-for="item in scope.row.categories" :key="item" class="category-btn">
            {{item}}
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
import moment from 'moment'

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
        res.data.forEach((val, index) => {
          val.date = moment(val.date).format('YYYY-MM-DD HH:mm:ss')
        })
        this.articles = res.data
      })
    },
    handleEdit (id) {
      this.$router.push({
        path: '/articles/edit',
        query: { id }
      })
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
    },
    searchArticle () {
      this.$router.push('/articles/search')
    }
  },
  created () {
    this.fetchDate()
  }
}
</script>

<style scoped>
.category-btn{
  margin-top: 15px;
}
</style>
