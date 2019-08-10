<template>
  <div class="articles-addnews">
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="文章类型"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.category }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="文章内容"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.body }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">添加</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'articles-addnews',
  data () {
    return {
      tableData: [{
        body: '2016-05-02',
        category: 'node.js',
        categories: [
          {
            value: '选项1',
            label: 'Node.js'
          }
        ],
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
