<template>
    <div>
        <div class="centralTextOpenWeather">
        Please, enter your city name to get the current local weather:
        </div>
        <form action="#" id="ipcForm" @submit.prevent="submitAction()">
            <input type="text" id="city" placeholder="city" autofocus required :value="getCity" ref="cityInputElement" /><br>
            <input type="submit" value="Submit" />
        </form>
    </div>
</template>
<script lang="ts">
    //there's a current bug when importing electron submodules. See note at the end of this file
    // // Substitute net rest requests for AXIOS and decouple this component from any Electron module
    // const electron = window.require('electron')
    // const remote: Electron.Remote = electron.remote
    // const net: Electron.Net = remote.net
    // let request: Electron.ClientRequest
    
    import WeatherInfoObjInterface from '../interfaces/Weather-info-obj-interface'
    let weatherInfoObj: WeatherInfoObjInterface
    const maxTimeInMillisForResponse = 10000
    const unitsSystem = 'metric'
    const appid = 'c90bb6a51603a99515006429cd457dc0' //sample key
    let cityFormattedToURL
    const method = 'GET'
    const protocol = 'http:'
    const hostname = 'api.openweathermap.org'
    const didRespond = false //change to let when the code is finished
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    export default Vue.extend({
        name: 'CurrentWeatherComponent2',
        data() {
            return {}
        },
        methods: {
            submitAction(): void{
                const cityInputElement: HTMLInputElement = this.$refs.cityInputElement as HTMLInputElement;
                this.$store.dispatch("setCity", cityInputElement.value);
                alert("Current city: "+this.getCity);
                alert("Current city formatted for URL: "+this.getCityFormattedToURL);

                //UNDER CONSTRUCTION !!!!!!!
                //UNDER CONSTRUCTION !!!!!!!
                //UNDER CONSTRUCTION !!!!!!!
            }
        },
        computed: {
            ...mapGetters(['getCity', 'getCityFormattedToURL'])
        }
    })
</script>
<style scoped>
    div.centralTextOpenWeather{
        margin-bottom: 1.5em;
    }
    input#city{
        font-size: 1.4em;
        margin-bottom: 1em;
        padding: 0.3em;
    }
    input[type=submit]{
        padding: 0.3em 1em 0.3em 1em;
        font-size: 1.1em;
    }
</style>

* note: when and IF importing electron module and its submodules, as ipcRenderer, to avoid the
errors "Uncaught TypeError: fs.existsSync is not a function" and "'Electron' is not defined", 
as well as to be able to set the types of the objects' variables correctly, instead of using 
"any" types, do the following:
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
