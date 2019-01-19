import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios, axios)

export default new Vuex.Store({
  modules: {
    users
  },
  state: {

  },
  mutations: {

  },  
  actions: {

  },
  getters: {

  }
})
