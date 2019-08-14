<template>
  <div class="articles-addnews">
    <!-- <el-table :data="editArticle" style="width: 100%">
      <el-table-column label="文章类型" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.category }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="文章标题" width="120"></el-table-column>
      <el-table-column prop="author" label="文章作者" width="100  "></el-table-column>
      <el-table-column label="文章内容" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.body }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">添加</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-form :model="editArticle">
      <el-form-item label="ID：">
        <el-button type="text" disabled >12346578945</el-button>
      </el-form-item>
      <el-form-item label="发布时间：">
        <el-button type="text"> {{editArticle.date}} </el-button>
      </el-form-item>
      <el-form-item label="该文章的分类：">
        <el-button type="success" size="small" style="margin-right:20px">java</el-button>
        <br>
        <el-select v-model="editArticle.categories" placeholder="请选择" style="margin: 10px 0 0 110px">
          <el-option v-for="item in editArticle.categories" :key="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题：">
        <el-input v-model="editArticle.title" :placeholder="editArticle.title"></el-input>
      </el-form-item>
      <el-form-item label="文章作者：">
        <el-input v-model="editArticle.author" placeholder="editArticle.author"></el-input>
      </el-form-item>
      <el-form-item label="文章点赞数/收藏书：">
        <el-button type="text" size="small">120 / 152</el-button>
      </el-form-item>
      <el-form-item label="文章内容：">
        <el-input type="textarea" :rows="5" v-model="editArticle.body" :placeholder="editArticle.body"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'articles-edit',
  data () {
    return {
      editArticle: {
        date: new Date().toLocaleDateString(),
        title: 'title',
        author: 'author',
        categories: [],
        selectValue: '',
        body: 'content'
      }
    }
  },
  methods: {
    handleEdit (index, row) {
    }
  }
}
</script>
