<template>
  <div class="centralImageAbout">
    <img id="about" alt="about-image" src="../assets/about.png" />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'AboutComponent1'
  })
</script>
<style scoped>
  div.centralImageAbout{
    width: 80%;
    margin: 2em auto 3em auto;
  }
  img#about{
    width: 200px;
  }
</style>
