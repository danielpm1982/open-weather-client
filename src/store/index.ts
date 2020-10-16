import Vue from 'vue'
import Vuex from 'vuex'
import WeatherInfoObjInterface from '../interfaces/Weather-info-obj-interface'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    username: "" as string,
    usernameColor: "" as string,
    city: "" as string,
    cityId: "" as string,
    isLogged: false as boolean,
    weatherInfoObj: null as unknown as WeatherInfoObjInterface
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
    getCityId: state => {
      const temp = sessionStorage.getItem("cityId") as string
      if(temp){
        state.cityId = temp
      }
      return state.cityId
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
    },
    getWeatherInfoObj: state => {
      const tempString = sessionStorage.getItem("weatherInfoObj")
      let tempObject
      if(tempString){
        tempObject = JSON.parse(tempString) as WeatherInfoObjInterface
        if(tempObject){
          state.weatherInfoObj = tempObject
        }
      }      
      return state.weatherInfoObj
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
    setCityId(state, payload: string){
      state.cityId=payload
    },
    login(state, payload: boolean){
      state.isLogged=payload
    },
    setWeatherInfoObj(state, payload: WeatherInfoObjInterface){
      state.weatherInfoObj=payload;
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
    setCityId(context, payload: string){
      const temp = payload.trim()
      sessionStorage.setItem("cityId", temp)
      context.commit("setCityId", temp)
    },
    login(context){
      sessionStorage.setItem("isLogged", "true")
      context.commit("login")
    },
    setWeatherInfoObj(context, payload: WeatherInfoObjInterface){
      let temp = ""
      if(payload){
        temp = JSON.stringify(payload)  
      }
      sessionStorage.setItem("weatherInfoObj", temp)
      context.commit("setWeatherInfoObj", temp)
    },
    reset({commit}){
      sessionStorage.setItem("username", "")
      sessionStorage.setItem("usernameColor", "")
      sessionStorage.setItem("city", "")
      sessionStorage.setItem("cityId", "")
      sessionStorage.setItem("isLogged", "false")
      sessionStorage.setItem("weatherInfoObj", "")
      commit("setUsername", "")
      commit("setUsernameColor", "")
      commit("setCity", "")
      commit("setCityId", "")
      commit("login", false)
      commit("setWeatherInfoObj", null)
    }
  }
})
