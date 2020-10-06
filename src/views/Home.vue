<template>
  <div>
    <home-component-1/>
    <home-component-2/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import HomeComponent1 from '../components/HomeComponent1.vue';
  import HomeComponent2 from '../components/HomeComponent2.vue';
  const electron = window.require('electron')
  const ipcRenderer: Electron.IpcRenderer = electron.ipcRenderer as Electron.IpcRenderer
  export default Vue.extend({
    name: 'Home',
    components: {
      HomeComponent1,
      HomeComponent2
    },
    created(){
      ipcRenderer.on("logout", () => {
        this.$router.push("/logout")
      })
    }
  })
</script>
<style scoped>  
</style>
