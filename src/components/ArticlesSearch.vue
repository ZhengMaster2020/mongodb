<template>
  <div>
    <el-form :model="articleform">
      <el-tag type="success">查询文章</el-tag>
      <el-form-item>
        <el-row>
          <el-col :span="11"><el-input v-model="selectInputVal" placeholder="请输入内容"></el-input></el-col>
          <el-col :span="4" style="margin-left:10px">
            <el-select v-model="selectOptionVal" multiple placeholder="默认按标题查询">
              <el-option v-for="item in condition" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2" style="margin-left:10px">
            <el-button type="primary" circle  icon="el-icon-search" @click="searchArticle"></el-button>
            </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <el-divider content-position="right" v-if="flag">
      <i class="el-icon-tickets"></i> 查询到 {{article.length}} 条结果
    </el-divider>
    <el-table :data="article">
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
      <el-table-column fixed="right" label="操作">
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
  name: 'ArticlesSearch',
  data () {
    return {
      flag: false,
      articleform: {},
      article: [],
      condition: ['id', '标题', '作者'],
      selectInputVal: '',
      selectOptionVal: ''
    }
  },
  methods: {
    searchArticle () {
      if (this.selectInputVal === '') {
        this.$message.error('内容不能为空')
      } else if (this.selectOptionVal.length === 0) {
        // 默认按标题查询文章
        this.selectOptionVal.push(this.condition[1])
      }
      this.$http.get(`articles`, {
        params: {
          selectOptionVal: this.selectOptionVal,
          selectInputVal: this.selectInputVal
        }
      })
        .then(res => {
          res.data.forEach((val, index) => {
            val.date = moment(val.date).format('YYYY-MM-DD HH:mm:ss')
          })
          this.article = res.data
          console.log(this.article.length)
          if (res.data.length === 0) {
            this.$message.error('查无此文章，请重新入')
          }
          this.flag = true
        })
        .catch(err => {
          alert(`发生错误：${err}`)
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
        if (this.article.length !== 0) {
          this.searchArticle()
        }
      })
    }
  }
}
</script>

<style scoped>
.el-tag{
  margin-bottom: 20px;
}
.category-btn{
  margin-top: 15px;
}
</style>
