<template>
  <div class="articles-name">
    <el-table :data="articles">
      <el-table-column prop="date" label="发布日期" width="140"></el-table-column>
      <el-table-column prop="title" label="文章标题" width="120"></el-table-column>
      <el-table-column prop="categories" label="文章分类" width="100"></el-table-column>
      <el-table-column prop="author" label="文章作者" width="120"></el-table-column>
      <el-table-column prop="readCount" label="阅读数" width="100"></el-table-column>
      <el-table-column prop="collectCount" label="收藏数" width="100"></el-table-column>
      <el-table-column prop="body" label="文章内容"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="gotoEdit(scope.row)" type="success" size="small">编辑</el-button>
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
        // console.log(res.data)
        this.articles = res.data
      })
    },
    gotoEdit (row) {
      // console.log(row)
      this.$router.push('/articles/edit')
    }
  },
  created () {
    this.fetchDate()
  }
}
</script>
