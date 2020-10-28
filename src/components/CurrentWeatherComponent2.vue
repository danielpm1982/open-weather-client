<template>
    <div>
        <div class="centralTextOpenWeather">{{ formLabel }}</div>
        <form action="#" id="form" @submit.prevent="submit">
            <input type="text" id="city" placeholder="city name" v-model.trim="city" /><br>
            <h4>{{ showCityPreview }}</h4>
            <input type="text" id="cityId" placeholder="city id" v-model.trim="cityId" /><br>
            <h4>{{ showCityIdPreview }}</h4>
            <input type="submit" value="Submit" />
            <input type="button" value="Clear" @click="clear" />
        </form>
    </div>
</template>
<script lang="ts">
    import WeatherInfoObjInterface from '../interfaces/Weather-info-obj-interface'
    import axios from 'axios'
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    export default Vue.extend({
        name: 'CurrentWeatherComponent2',
        data() {
            return {
                formLabel: "Please, enter either a city name or a city id to get its current weather:",
                city: "",
                cityId: "",
                cityFormattedToURL: "",
                unitsSystem: 'metric',
                appid: 'c90bb6a51603a99515006429cd457dc0', //sample key
                protocol: 'http://',
                hostname: 'api.openweathermap.org'
            }
        },
        methods: {
            // saves the city id or the city name state at the Vuex store and, from there, persists that at the 
            // browser window using the sessionStorage. That keeps the state even after reload, until session ends -
            // that is, until browser window is closed... or until the state is reset by logging out options
            // If both city id and city name inputs are filled in, only city id is considered, and any previous 
            // city name is reset. City name will be considered only if city id is empty. It must be passed at least 
            // one of them
            submit(): void{
                let path
                if(this.city&&this.cityId){
                    alert('Both city name and city id have been passed.\n\nCity id will be considered and city name will be discarded.\n\nIf you wanna search using the city name, don\'t pass the city id !')
                }
                if(this.cityId){
                    this.city=""
                    this.$store.dispatch("setCityId", this.cityId)
                    this.$store.dispatch("setCity", this.city)
                    // creates the path with all needed params for the REST GET request
                    path = `/data/2.5/weather?id=${this.getCityId}&units=${this.unitsSystem}&appid=${this.appid}`
                } else if(this.city){
                    this.cityId=""
                    this.$store.dispatch("setCity", this.city)
                    this.$store.dispatch("setCityId", this.cityId)
                    // creates the path with all needed params for the REST GET request
                    path = `/data/2.5/weather?q=${this.getCityFormattedToURL}&units=${this.unitsSystem}&appid=${this.appid}`
                } else{
                    alert('You must pass either a valid city name or a valid city id !\n\nNone of these have been passed.\n\nTry again !')
                }
                if(path){
                    axios
                    // sends the GET request to the REST API
                    .get<WeatherInfoObjInterface>(this.protocol+this.hostname+path)
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
            },
            // clear form fields
            clear() {
                this.city = ""
                this.cityId = ""
            }
        },
        computed: {
            ...mapGetters(['getCity', 'getCityId', 'getCityFormattedToURL']),
            showCityPreview(): string{
                if(this.city){
                    return "city: "+this.city
                } else{
                    return ""
                }
            },
            showCityIdPreview(): string{
                if(this.cityId){
                    return "cityId: "+this.cityId
                } else{
                    return ""
                }
            }
        },
        // when creating this component, load store values as initial values to the custom data properties
        created() {
            this.city = this.getCity
            this.cityId = this.getCityId
            this.cityFormattedToURL = this.getCityFormattedToURL
        }
    })
</script>
<style scoped>
    div.centralTextOpenWeather{
        width: 80%;
        margin: 0em auto 1.5em auto;
    }
    input#city, input#cityId{
        font-size: 1.4em;
        margin-bottom: 1em;
        padding: 0.3em;
    }
    input[type=submit], input[type=button]{
        padding: 0.3em 1em 0.3em 1em;
        font-size: 1.1em;
        margin-right: 1em;
        margin-left: 1em;
        width: 130px;
    }
    h4{
      color: white;
      margin-top: -0.7em;
    }
</style>
