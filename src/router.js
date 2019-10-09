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
        },
        {
          path: '/message/show',
          name: 'showPersonMsg',
          component: () => import(/* webpackChunkName: "showPersonMsg" */ './components/ShowPersonMsg.vue')
        },
        {
          path: '/message/modify',
          name: 'modifyPresonMsg',
          component: () => import(/* webpackChunkName: "modifyPresonMsg" */ './components/ModifyPersonMsg.vue')
        },
        {
          path: '/error/401',
          name: '401',
          component: () => import(/* webpackChunkName: "401" */ './views/401.vue')
        },
        {
          path: '/error/404',
          name: '404',
          component: () => import(/* webpackChunkName: "404" */ './views/404.vue')
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
