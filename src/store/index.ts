import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: "World" as string,
    usernameColor: "white" as string
  },
  getters:{
    getUsername: state => {
      const temp = sessionStorage.getItem("username") as string
      if(temp){
        state.username = temp;
      }
      return state.username
    },
    getUsernameColor: state => {
      const temp = sessionStorage.getItem("usernameColor") as string
      if(temp){
        state.usernameColor = temp
      }
      return state.usernameColor
    }
  },
  mutations: {
    setUsername(state, payload: string){
       state.username=payload
    },
    setUsernameColor(state, payload: string){
      state.usernameColor=payload
    }
  },
  actions: {
    setUsername(context, payload: string){
      sessionStorage.setItem("username", payload)
      context.commit("setUsername", payload)
    },
    setUsernameColor(context, payload: string){
      sessionStorage.setItem("usernameColor", payload)
      context.commit("setUsernameColor", payload)
    }
  }
})
