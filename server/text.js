/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
// mongoose.connect('mongodb://127.0.0.1/blog', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: true
// })
// let db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => {
//   console.log('mongogdb连接成功')
// })
// const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

// const BlogPostSchema = new Schema({
//   id: { type: ObjectId },
//   title: { type: String },
//   date: { type: Date },
//   categories: { type: String },
//   author: { type: String },
//   readCount: { type: Number },
//   collectCount: { type: Number },
//   body: { type: String }
// })
// const BlogPostModel = mongoose.model('BlogPostModel', BlogPostSchema)
// // eslint-disable-next-line no-unused-vars
// const BlogPost = BlogPostModel.create({
//   title: 'testTitle',
//   date: '2019-8-12',
//   categories: 'javascript',
//   author: 'zhengmaster',
//   readCount: 200,
//   collectCount: 300,
//   body: 'i am body'
// }, (err, BlogPost) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('BlogPost')
//   }
// })




// app.get('/', async (res) => {
//   res.send('index page')
// })
// app.get('/articles', async (request, response) => {
//   response.json(
//     {
//       flag: true,
//       status: '200',
//       msg: 'This is CORS-enabled for all origins!',
//       articles: [
//         {
//           id: '001',
//           date: new Date().toLocaleDateString(),
//           title: 'zhangsan',
//           categories: 'Node.js',
//           author: '张三',
//           readCount: '12',
//           collectCount: '20',
//           body: 'body'
//         }
//       ]
//     }
//   )
// })



// <el-table :data="newArticle" style="width: 100%">
//       <el-table-column label="文章类型" width="100">
//         <template slot-scope="scope">
//           <span style="margin-left: 10px">{{ scope.row.category }}</span>
//         </template>
//       </el-table-column>
//       <el-table-column prop="title" label="文章标题" width="120"></el-table-column>
//       <el-table-column prop="author" label="文章作者" width="100  "></el-table-column>
//       <el-table-column label="文章内容" width="180">
//         <template slot-scope="scope">
//           <span>{{ scope.row.body }}</span>
//         </template>
//       </el-table-column>
//       <el-table-column label="操作">
//         <template slot-scope="scope">
//           <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">添加</el-button>
//         </template>
//       </el-table-column>
//     </el-table>