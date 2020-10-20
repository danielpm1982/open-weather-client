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
  import { mapGetters } from 'vuex'
  const electron = window.require('electron')
  const ipcRenderer = electron.ipcRenderer as Electron.IpcRenderer
  export default Vue.extend({
    name: 'Home',
    components: {
      HomeComponent1,
      HomeComponent2
    },
    computed: {
      ...mapGetters(['isLogged'])
    },
    created(){
      if(this.isLogged){
        ipcRenderer.send('setMenuToLoggedInState', true)
      } else{
        ipcRenderer.send('setMenuToLoggedInState', false)
      }
    }
  })  
</script>
<style scoped>  
</style>

Everytime this Home view is created, the 'isLogged' state is checked and the Electron main 
process is called to reset the Menu accordingly to this user log state at the Vuex store.
Both after the login, as after the logout, the router redirects to this Home route, so this 
is where this check should always be done.
It had to be used the ipcRenderer here, although the effort of not using any Electron API 
inside the Vue components... 'cause that's the only way to emmit an event call to the 
Electron main process from the renderer process or from the one and only rendered 
BrowserWindow.

Please, read the "Importing electron module through "require", inside Vue.js components, 
and avoiding errors" mini-article, at 
https://github.com/danielpm1982/open-weather-client/blob/master/references.md, 
for knowing how to import electron module and submodules inside Vue.js components, as done 
here.
