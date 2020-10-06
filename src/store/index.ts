import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: "" as string,
    usernameColor: "" as string,
    city: "" as string,
    isLogged: false as boolean
  },
  getters:{
    getUsername: state => {
      const temp = sessionStorage.getItem("username") as string
      if(temp){
        state.username = temp
      }
      return state.username
    },
    getUsernameColor: state => {
      const temp = sessionStorage.getItem("usernameColor") as string
      if(temp){
        state.usernameColor = temp
      }
      return state.usernameColor
    },
    getCity: state => {
      const temp = sessionStorage.getItem("city") as string
      if(temp){
        state.city = temp
      }
      return state.city
    },
    getCityFormattedToURL: state => {
      const stringInitialValue = state.city
      if(stringInitialValue.includes(' ')){
        let resultString = ""
        const stringNameSplitArray = stringInitialValue.split(' ')
        for (let i=0; i<stringNameSplitArray.length-1; i++){
          stringNameSplitArray[i]+='+'
        }
        for (const word of stringNameSplitArray){
          resultString+=word
        }
        return resultString
      } else{
        return stringInitialValue
      }
    },
    isLogged: state => {
      const tempString = sessionStorage.getItem("isLogged") as string
      if(tempString === "true"){
        state.isLogged = true
      }
      return state.isLogged
    }
  },
  mutations: {
    setUsername(state, payload: string){
       state.username=payload
    },
    setUsernameColor(state, payload: string){
      state.usernameColor=payload
    },
    setCity(state, payload: string){
      state.city=payload
    },
    login(state, payload: boolean){
      state.isLogged=payload
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
    },
    setCity(context, payload: string){
      const temp = payload.trim()
      sessionStorage.setItem("city", temp)
      context.commit("setCity", temp)
    },
    login(context){
      sessionStorage.setItem("isLogged", "true")
      context.commit("login")
    },
    reset({commit}){
      sessionStorage.setItem("username", "")
      sessionStorage.setItem("usernameColor", "")
      sessionStorage.setItem("city", "")
      sessionStorage.setItem("isLogged", "false")
      commit("setUsername", "")
      commit("setUsernameColor", "")
      commit("setCity", "")
      commit("login", false)
    }
  }
})
