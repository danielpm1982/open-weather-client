<template>
  <div>
    <about-component-1/>
    <about-component-2/>
  </div>
  <!-- We are using node <script>document.write(process.versions.node)</script>,
  Chrome <script>document.write(process.versions.chrome)</script>,
  and Electron <script>document.write(process.versions.electron)</script>. -->
</template>
<script lang="ts">
  import Vue from 'vue';
  import AboutComponent1 from '../components/AboutComponent1.vue';
  import AboutComponent2 from '../components/AboutComponent2.vue';
  export default Vue.extend({
    name: 'Home',
    components: {
      AboutComponent1,
      AboutComponent2
    }
  });
</script>
<style scoped>
  
</style>
