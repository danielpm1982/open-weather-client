<template>
  <div>
    <current-weather-component-1/>
    <current-weather-component-2/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import CurrentWeatherComponent1 from '../components/CurrentWeatherComponent1.vue'
  import CurrentWeatherComponent2 from '../components/CurrentWeatherComponent2.vue'
  export default Vue.extend({
    name: 'OpenWeather',
    components: {
      CurrentWeatherComponent1,
      CurrentWeatherComponent2
    }
  })
</script>
<style scoped>
</style>
