import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: [
      {
        date: '2019-8-9',
        name: 'zhangsan',
        address: 'maoming'
      }
    ]

  },
  mutations: {

  },
  actions: {

  }
})
