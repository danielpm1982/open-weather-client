<template>
  <div>
    <current-weather-response-component-1/>
    <current-weather-response-component-2/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import CurrentWeatherResponseComponent1 from '../components/CurrentWeatherResponseComponent1.vue'
  import CurrentWeatherResponseComponent2 from '../components/CurrentWeatherResponseComponent2.vue'
  export default Vue.extend({
    name: 'OpenWeather',
    components: {
      CurrentWeatherResponseComponent1,
      CurrentWeatherResponseComponent2
    }
  })
</script>
<style scoped>
</style>
