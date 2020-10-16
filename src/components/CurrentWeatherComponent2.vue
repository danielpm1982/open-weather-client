<template>
    <div>
        <div class="centralTextOpenWeather">
        Please, enter either a city name or a city id to get its current weather:
        </div>
        <form action="#" id="ipcForm" @submit.prevent="submitAction()">
            <input type="text" id="city" placeholder="city name" :value="getCity" ref="cityInputElement" /><br>
            <input type="text" id="cityId" placeholder="city id" :value="getCityId" ref="cityIdInputElement" /><br>
            <input type="submit" value="Submit" />
        </form>
    </div>
</template>
<script lang="ts">
    const unitsSystem = 'metric'
    const appid = 'c90bb6a51603a99515006429cd457dc0' //sample key
    let cityFormattedToURL
    const protocol = 'http://'
    const hostname = 'api.openweathermap.org'
    import WeatherInfoObjInterface from '../interfaces/Weather-info-obj-interface'
    import axios from 'axios'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    export default Vue.extend({
        name: 'CurrentWeatherComponent2',
        data() {
            return {}
        },
        methods: {
            submitAction(): void{
                // gets the city name input
                const cityInputElement: HTMLInputElement = this.$refs.cityInputElement as HTMLInputElement
                // gets the city id input
                const cityIdInputElement: HTMLInputElement = this.$refs.cityIdInputElement as HTMLInputElement
                // saves the city id or the city name state at the Vuex store and, from there, persists that at the 
                // browser window using the sessionStorage. That keeps the state even after reload, until session ends -
                // that is, until browser window is closed... or until the state is reset by logging out options
                // If both city id and city name inputs are filled in, only city id is considered, and any previous 
                // city name is reset. City name will be considered only if city id is empty. It must be passed at least 
                // one of them
                let path
                if(cityIdInputElement.value.trim()&&cityInputElement.value.trim()){
                    alert('Both city name and city id have been passed.\n\nCity id will be considered and city name will be discarded.\n\nIf you wanna search using the city name, don\'t pass the city id !')
                }
                if(cityIdInputElement.value.trim()){
                    cityInputElement.value=""
                    this.$store.dispatch("setCityId", cityIdInputElement.value)
                    this.$store.dispatch("setCity", cityInputElement.value)
                    // creates the path with all needed params for the REST GET request
                    path = `/data/2.5/weather?id=${this.getCityId}&units=${unitsSystem}&appid=${appid}`
                } else if(cityInputElement.value.trim()){
                    cityIdInputElement.value=""
                    this.$store.dispatch("setCity", cityInputElement.value)
                    this.$store.dispatch("setCityId", cityIdInputElement.value)
                    // creates the path with all needed params for the REST GET request
                    path = `/data/2.5/weather?q=${this.getCityFormattedToURL}&units=${unitsSystem}&appid=${appid}`
                } else{
                    alert('You must pass either a valid city name or a valid city id !\n\nNone of these have been passed.\n\nTry again !')
                }
                if(path){
                    axios
                    // sends the GET request to the REST API
                    .get<WeatherInfoObjInterface>(protocol+hostname+path)
                    .then(response => 
                        {
                            // when response is received, check if code is 200, saves the weatherInfoObj at the store
                            // and at the browser window sessionStorage and redirects to the currentWeatherResponse view
                            // for showing that response object data
                            if(response.status == 200){
                                this.$store.dispatch('setWeatherInfoObj', response.data)
                                this.$router.push('/current-weather-response')
                            }
                        }
                    )
                    .catch(error => 
                        {
                            // if error catched is 404, that's probably because the city name or city id was wrong,
                            // asks for a valid city name or city id
                            if(error.response.status == 404){
                                alert('City id, or city name, does NOT exist or could not connect to the REST Service server ! Please, try again !\n\n'+error)
                            } else{
                                // for any error code, shows a more generic error message
                                alert('Can\'t show current weather ! Please, try again later !\n\n'+error)
                            }
                            // in any error case, resets the last valid response object at the store and sessionStorage.
                            // if the response is valid, the last response value is substituted by the new one and 
                            // also deleted as well
                            // Do not reset the city name or city id at the form, though, so that the user can see which wrong 
                            // city name or city id he's used, and then use a different one on the next try
                            this.$store.dispatch('setWeatherInfoObj', "")
                        }
                    )
                }
            }
        },
        computed: {
            ...mapGetters(['getCity', 'getCityId', 'getCityFormattedToURL'])
        }
    })
</script>
<style scoped>
    div.centralTextOpenWeather{
        margin-bottom: 1.5em;
    }
    input#city, input#cityId{
        font-size: 1.4em;
        margin-bottom: 1em;
        padding: 0.3em;
    }
    input[type=submit]{
        padding: 0.3em 1em 0.3em 1em;
        font-size: 1.1em;
    }
</style>

* note: no Electron module or object is needed at this form anymore - Vuex and Axios are
used instead. BUT when and IF importing electron module and its submodules, as ipcRenderer, 
to avoid the errors "Uncaught TypeError: fs.existsSync is not a function" and "'Electron' 
is not defined", as well as to be able to set the types of the objects' variables correctly, 
instead of using "any" types, do the following:
- use the ES6 "import" / "from" simply to have the Electron types defined, not to extract the 
objects. This is for being able to use "typeof Electron.submoduleType". If setting the types
after the ":" of the variables, you don't need this
- use the CommonJS "require" for importing the module and submodules, extract the objects, 
and then set each variable type using the Electron types - either using the ":" or "typeof"
- for setting the types on the variables of the electron objects, extract these mannually 
from the required electron object and not through destructuring
- disable the respective eslint rule, by setting "'@typescript-eslint/no-var-requires': 0" 
at .eslintrc.js file, in order to allow the use of "require"
- call the "require" always on the "window" object
- set "nodeIntegration: true" at the webPreferences of the that window at the background.ts file
- set "module": "CommonJS" at the tsconfig.json (to be able to use Electron interface types)
- do not deploy that at the web server through "npm run serve", only use "npm run electron:serve",
except after you adapt the project for a web version, eliminating Electron modules and code from it
