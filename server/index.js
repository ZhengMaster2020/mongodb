const express = require('express')
const cors = require('cors')()
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('mongogdb连接成功')
})
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const BlogPostSchema = new Schema({
  id: { type: ObjectId },
  title: { type: String },
  date: { type: Date },
  categories: { type: String },
  author: { type: String },
  readCount: { type: Number },
  collectCount: { type: Number },
  body: { type: String }
})
const BlogPostModel = mongoose.model('BlogPostModel', BlogPostSchema)
// eslint-disable-next-line no-unused-vars
const BlogPost = BlogPostModel.create({
  title: 'testTitle',
  date: '2019-8-12',
  categories: 'javascript',
  author: 'zhengmaster',
  readCount: 200,
  collectCount: 300,
  body: 'i am body'
}, (err, BlogPost) => {
  if (err) {
    console.log(err)
  } else {
    console.log(BlogPost)
  }
})

app.use(cors)

app.get('/articles', async (request, response) => {
  response.json(
    {
      flag: true,
      status: '200',
      msg: 'This is CORS-enabled for all origins!',
      articles: [
        {
          id: '001',
          date: new Date().toLocaleDateString(),
          title: 'zhangsan',
          categories: 'Node.js',
          author: '张三',
          readCount: '12',
          collectCount: '20',
          body: 'body'
        }
      ]
    }
  )
})

app.listen(5000, () => {
  console.log(`cors enabled and listen the 5000 port`)
})
