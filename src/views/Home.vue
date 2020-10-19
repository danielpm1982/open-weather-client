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

Note: when and if having to import electron module and its submodules, as ipcRenderer, from 
inside a Vue component, to avoid the errors "Uncaught TypeError: fs.existsSync is not a 
function" and "'Electron' is not defined", as well as to be able to set the types of the 
objects' variables correctly, instead of using "any" type, do the following:
- use the ES6 "import" / "from" simply to have the Electron types defined, not to extract 
the objects. This is for being able to use "typeof Electron.submoduleType". If setting the 
types after the ":" of the variables, you don't need this
- use the CommonJS "require" for importing the module and submodules, extract the objects, 
and then set each variable type using the Electron types - either using the ":" or "typeof"
- for setting the types on the variables of the electron objects, extract these mannually 
from the required electron object and not through destructuring
- disable the respective eslint rule, by setting "'@typescript-eslint/no-var-requires': 0" 
at .eslintrc.js file, in order to allow the use of "require"
- call the "require" always on the "window" object
- set "nodeIntegration: true" at the webPreferences of the that window at the background.ts
file
- set "module": "CommonJS" at the tsconfig.json (to be able to use Electron interface types)
- do not deploy that at the web server through "npm run serve", only use "npm run 
electron:serve", except after you adapt the project for a web version, eliminating Electron 
modules and code from it
