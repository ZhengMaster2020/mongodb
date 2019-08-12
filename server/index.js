const express = require('express')
const cors = require('cors')()
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/mongodb-test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})

const ObjectId = mongoose.ObjectId

const Article = mongoose.model('article', new mongoose.Schema({
  id: { type: ObjectId },
  title: { type: String },
  date: { type: Date, default: new Date() },
  categories: { type: String },
  author: { type: String },
  readCount: { type: Number, default: 0 },
  collectCount: { type: Number, default: 0 },
  body: { type: String }
}))

app.use(cors)
app.use(express.json())

// 获取文章
app.get('/api/articles', async (req, res) => {
  const article = await Article.find()
  res.send(article)
})
// 新增文章
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
  console.log(req)
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})
app.listen(5000, () => {
  console.log(`http://localhost:5000`)
})
