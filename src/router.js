import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/articles/detail',
          name: 'articleDetail',
          component: () => import(/* webpackChunkName: "articlesName" */ './components/ArticlesDetail.vue')
        },
        {
          path: '/articles/categories',
          name: 'articlesCategory',
          component: () => import(/* webpackChunkName: "articlesCategory" */ './components/ArticlesCategory.vue')
        },
        {
          path: '/articles/add',
          name: 'articlesAddNews',
          component: () => import(/* webpackChunkName: "articlesAddNews" */ './components/ArticlesAddNews.vue')
        },
        {
          path: '/articles/edit',
          name: 'articlesEdit',
          component: () => import(/* webpackChunkName: "articlesEdit" */ './components/ArticlesEdit.vue')
        },
        {
          path: '/articles/search',
          name: 'articlesSearch',
          component: () => import(/* webpackChunkName: "articlesSearch" */ './components/ArticlesSearch.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/*',
      component: NotFound
    }
  ]
})
