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
  date: { type: Date },
  categories: { type: String },
  author: { type: String },
  readCount: { type: Number, default: 0 },
  collectCount: { type: Number, default: 0 },
  body: { type: String }
}))

app.use(cors)
app.use(express.json())

app.get('/api/articles', async (req, res) => {
  res.json([{
    id: '001',
    date: new Date().toLocaleDateString(),
    title: 'zhangsan',
    categories: 'Node.js',
    author: '张三',
    readCount: '12',
    collectCount: '20',
    body: 'body'
  }])
})
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})

app.listen(5000, () => {
  console.log(`http://localhost:5000`)
})
