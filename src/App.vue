<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/current-weather" exact v-if="isLogged">Current Weather</router-link>
      <router-link to="/about" exact>About</router-link>
      <router-link to="/login" exact v-if="!isLogged">Login</router-link>
      <router-link to="/logout" exact v-if="isLogged">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex';
  const electron = window.require('electron')
  const ipcRenderer = electron.ipcRenderer as Electron.IpcRenderer
  export default Vue.extend({
    name: 'App',
    computed:{
      ...mapGetters(['isLogged'])
    },
    created(){
      // listens to the main process 'changeRouteTo' event and changes the route from 
      // inside this Vue instance, according to what path the main process requires.
      // responds to Menu click() events at the main process and changes the route accordingly.
      ipcRenderer.on('changeRouteTo', (event: Event, path: string) => {
        this.$router.push(path)
      })
    }
  })
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #nav {
    padding: 30px;
  }
  #nav a{
    margin-left: 1em;
    text-decoration: none;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  a:link{
    color: white;
  }
  a:visited{
    color: white;
  }
  a:focus{
    color: white;
  }
  a:hover{
    color: lightskyblue;;
  }
</style>


This is the main component of this app, into which all views will be injected,
according to the current selected route. Other than these views and their
respective subcomponents, this main component also displays a nav bar with
router links for the user to select and change the actual route (and view) to
another one. The user also can use the Menu, set at the main process file of 
Electron (background.js), for achieving the same goal.

The router links "Login", "Logout" and "Current Weather" will be shown according 
to the state of "isLogged" property at the Vuex store. If the user is not logged, 
the Login route option will appear and the Logout and Current Weather will not, 
and, if the user is already logged, the Logout option and Current Weather will 
appear but the Login option will not.

I've managed to conditionally show the view-links according to the login state,
as well as do the same with the Electron submenus (see Home.vue).

It had to be used the ipcRenderer here, although the effort of not using any 
Electron API inside the Vue components (also it's used at the Home.vue)... 'cause 
that's the only way to emmit an event call from the main process to the renderer process, 
or to this Vue component (or vice versa, as in the Home.vue). In turn, and in the case of 
this App.vue component, the routes can be changed here according to the path passed as the 
payload, through the "changeRouteTo" channel, reactively to the Menu click() events at the 
main process.

Please, read the "Importing electron module through "require", inside Vue.js components, 
and avoiding errors" mini-article, at 
https://github.com/danielpm1982/open-weather-client/blob/master/references.md, 
for knowing how to import electron module and submodules inside Vue.js components, as done 
here.
