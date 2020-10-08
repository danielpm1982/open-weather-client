<template>
    <div>
        <div class="centralImageWeatherResponse">
            <img id="weatherResponse" alt="weather-response-image" src="../assets/weather.png" />
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'CurrentWeatherResponseComponent1',
    })
</script>
<style scoped>
    div.centralImageWeatherResponse{
        width: 30%;
        margin: 1em auto 2em auto;
    }
    img#weatherResponse{
        width: 120px;
    }
</style>
