<template>
  <div class="articles-addnews">
    <el-table :data="editArticle" style="width: 100%">
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
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'articles-edit',
  data () {
    return {
      editArticle: []
    }
  },
  methods: {
    handleEdit (index, row) {
    }
  }
}
</script>
