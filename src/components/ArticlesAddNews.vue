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
        <el-select v-model="newArticle.category"  placeholder="请选择的分类">
          <el-option label="item" value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" placeholder="编辑你的文章内容" rows="15"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'articles-addnews',
  data () {
    return {
      newArticle: {
        title: '',
        author: '',
        category: ['node.js', 'java', 'javascript']
      }
    }
  },
  methods: {
    handleEdit (index, row) {
    }
  }
}
</script>
