<template>
  <div>
    <home-component-1/>
    <home-component-2/>
  </div>
  <!-- We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>. -->
</template>
<script lang="ts">
  import Vue from 'vue';
  import HomeComponent1 from '../components/HomeComponent1.vue';
  import HomeComponent2 from '../components/HomeComponent2.vue';
  export default Vue.extend({
    name: 'Home',
    components: {
      HomeComponent1,
      HomeComponent2
    }
  });
</script>
<style scoped>
  
</style>
