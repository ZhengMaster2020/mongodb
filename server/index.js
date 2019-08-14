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
  categories: { type: Array },
  selectValue: { type: Array },
  author: { type: String },
  readCount: { type: Number, default: 0 },
  collectCount: { type: Number, default: 0 },
  body: { type: String }
}))

const Category = mongoose.model('category', new mongoose.Schema({
  id: { type: ObjectId },
  label: { type: String },
  value: { type: String }
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
  // console.log(req)
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

// 获取文章分类
app.get('/api/category', async (req, res) => {
  const category = await Category.find()
  res.send(category)
})

// 新增文章分类
app.post('/api/category', async (req, res) => {
  console.log(req.body)
  await Category.create(req.body)
  const category = await Category.find()
  res.send(category)
})

// 删除文章分类
app.delete('/api/category/:id', async (req, res) => {
  await Category.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

app.listen(5000, () => {
  console.log(`http://localhost:5000`)
})
