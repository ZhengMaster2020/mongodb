const express = require('express')
const cors = require('cors')()
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true})

app.use(cors)

app.get('/articles', async(request, response) => {
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

app.listen(3000, () => {
  console.log(`cors enabled and listen the 3000 port`)
})