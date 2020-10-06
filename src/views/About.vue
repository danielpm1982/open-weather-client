<template>
  <div>
    <about-component-1/>
    <about-component-2/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import AboutComponent1 from '../components/AboutComponent1.vue'
  import AboutComponent2 from '../components/AboutComponent2.vue'
  export default Vue.extend({
    name: 'Home',
    components: {
      AboutComponent1,
      AboutComponent2
    }
  })
</script>
<style scoped>
  
</style>
