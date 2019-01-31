import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users';
import auth from './modules/auth';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios, axios)

export default new Vuex.Store({
  modules: {
    userModule :users,
    authModule :auth
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
