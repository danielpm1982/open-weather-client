<template>
  <div>
    <login-component-1/>
    <login-component-2/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import LoginComponent1 from '../components/LoginComponent1.vue'
  import LoginComponent2 from '../components/LoginComponent2.vue'
  export default Vue.extend({
    name: 'Home',
    components: {
      LoginComponent1,
      LoginComponent2
    }
  })
</script>
<style scoped>
  
</style>
