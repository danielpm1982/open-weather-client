<template>
  <div>
    <login-component-1/>
    <login-component-2/>
    <login-component-3/>
  </div>
  <!-- We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>. -->
</template>
<script lang="ts">
  import Vue from 'vue';
  import LoginComponent1 from '../components/LoginComponent1.vue';
  import LoginComponent2 from '../components/LoginComponent2.vue';
  import LoginComponent3 from '../components/LoginComponent3.vue';
  export default Vue.extend({
    name: 'Home',
    components: {
      LoginComponent1,
      LoginComponent2,
      LoginComponent3
    }
  });
</script>
<style scoped>
  
</style>
