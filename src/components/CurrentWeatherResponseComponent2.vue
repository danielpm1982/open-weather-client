<template>
    <div>
        <div class="centralTextWeatherResponse">
            <p>City Name: {{ weather.name }}</p>
            <p>City Id: {{ weather.id }}</p>
            <p>Country Code: {{ weather.sys.country }}</p>
            <p>Coordinates: latitude {{ weather.coord.lat }} longitude {{ weather.coord.lon }}</p>
            <p>Time Zone: UTC {{ weather.timezone/3600 }}</p>
            <p>Weather Description: {{ weather.weather[0].main }} - {{ weather.weather[0].description }}</p>
            <p>Wind Speed (meter/sec): {{ weather.wind.speed }}</p>
            <p>Wind Direction (degrees): {{ weather.wind.deg }}</p>
            <p>Visibility (meters): {{ weather.visibility }}</p>
            <p>Cloudness (%): {{ weather.clouds.all }}</p>
            <p>Temperature (Celsius): {{ weather.main.temp }}</p>
            <p>Feels Like (Celsius): {{ weather.main.feels_like }}</p>
            <p>Temperature Minimum (Celsius): {{ weather.main.temp_min }}</p>
            <p>Temperature Maximum (Celsius): {{ weather.main.temp_max }}</p>
            <p>Pressure (hPa): {{ weather.main.pressure }}</p>
            <p>Humidity (%): {{ weather.main.humidity }}</p>
            <p>Last Updated: {{ getLastUpdateDateTime.dateString }} {{ getLastUpdateDateTime.timeString }}</p>
        </div>
        <footer id="footerTextWeatherResponse">
            <p>Source: http://api.openweathermap.org/data/2.5/weather</p>
        </footer>
    </div>
</template>
<script lang="ts">
    import { mapGetters } from 'vuex'
    import Vue from 'vue'
    import WeatherInfoObjInterface from '@/interfaces/Weather-info-obj-interface'
    export default Vue.extend({
        name: 'CurrentWeatherResponseComponent2',
        data(){
            return {
                weather: "" as unknown as WeatherInfoObjInterface
            }
        },
        computed:{
            ...mapGetters(['getWeatherInfoObj']),
            getLastUpdateDateTime() {
                const timeInMillis = this.weather.dt*1000
                const date = new Date(timeInMillis)
                const dateString: string = date.toLocaleDateString()
                const timeString: string = date.toLocaleTimeString()
                return {dateString: dateString, timeString: timeString}
            }
        },
        created(){
            this.weather = this.getWeatherInfoObj as WeatherInfoObjInterface
        }
    })
</script>
<style scoped>
    div.centralTextWeatherResponse{
        width: 45%;
        margin: auto;
        border: thin solid white;
        padding: 1em;
    }
    div.centralTextWeatherResponse p{
        text-align: left;
    }
    footer#footerTextWeatherResponse{
        text-align: center;
        font-style: italic;
        margin-top: 2em;
        margin-bottom: 3em;
    }
    footer#footerTextWeatherResponse p{
        font-size: 0.8em;
        margin-top: 1em;
        margin-bottom: 1em;
    }
</style>

This component simply gets the weatherInfoObj from the Vuex store, treats its 
data to a proper and user-friendly format and shows to the user through the 
CurrentWeatherResponse view
