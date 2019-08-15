# mongodb-test
> 这是一个关于文章操作的后台管理小项目,主要完成的功能有对文章的添加、删除、查找、修改等操作，还可以对文章进行文章的分类，可以文章的分类进行添加一个新的分类或者删出相关的分类，可以对已经分类的文章进行修改分类等操作。这是一个尽管项目虽小但设计前后端技术比较“五脏俱全”的**从前端页面到后端数据相应再到数据保存至数据库持久化的项目。**

## 设计的相关技术
1. 前端
  + Vue技术栈: Vue.js  vue-router  vue-vuex  vue-cli(3.x) ElementUI
2. 后端
  + Node.js / Express / cors(解决跨域) /  [mongoose](http://www.mongoosejs.net)  / moment.js / nodemon 
3. 数据库
  + mongoDb NoSQLManagerforMongoDB(mongodb GUI tool)
  
## 说明
本项目有**node.js 和 mongodb数据库**支持的环境下才能完全运行此项目成功, 运行前请确保mongodb服务已经正确运行成功  
> node --version  已经安装有node环境 查看node版本 最好确保比较新的版本  
> mongo 连接mongodb数据库  
> mongo --version 查看数据库版本     
> 
相关mongodb教程：https://www.runoob.com/mongodb/mongodb-tutorial.html


## Project setup
```
npm install 安装依赖
```

### Compiles and hot-reloads for development
```
npm run serve 运行项目
```
## 启动服务端文件
```
nodemon server (会找server文件下的index文件运行)
```

### Compiles and minifies for production
```
npm run build 编译打包输出
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
x