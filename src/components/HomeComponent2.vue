<template>
  <div>
    <h1>Hello <span :style="{color: spanElementColor}">{{ spanElementText }}</span> !</h1>
    <h2>Welcome to danielpm1982.com</h2>
    <div class="centralTextMain">
      <p>This is an Open Weather REST API client created with Node.js, npm, Webpack, Vue-cli, Vue.js, Vue-router, Vuex, Axios, Eslint, Babel, JavaScript ES6+, TypeScript and Electron.js .</p>
    </div>
  </div>
</template>
<script lang="ts">
  //there's a current bug when importing electron submodules. See note at the end of this file
  const { ipcRenderer } = window.require('electron');
  import Vue from 'vue';
  export default Vue.extend({
    name: 'HomeComponent2',
    data(){
      return {
        spanElementText: 'World' as string,
        spanElementColor: 'white' as string
      }
    },
    methods: {
      configureUserNameChangeAction(): void{
        ipcRenderer.on('username', (_e: Event, username: string)=>{
          this.spanElementText = username;
          this.spanElementColor = 'greenyellow';
        })
      },
      configureLogoutAction(): void{
        ipcRenderer.on('logout', (_e: Event)=>{
          this.spanElementText = 'World';
          this.spanElementColor = 'white';
        })
      },
      configure(): void{
        this.configureUserNameChangeAction();
        this.configureLogoutAction();
      }
    },
    created(){
      this.configure();
    }
  });
</script>
<style scoped>
  div.centralTextMain{
    width: 70%;
    margin: auto;
    margin-top: 2em;
    text-align: justify;
    padding: 0em 1em 0em 1em;
  }
  p{
    margin-top: 2em;
  }
</style>

* note: when importing electron module and submodules, as ipcRenderer:
- use the CommonJS "require" instead of ES6 "import" / "from";
- call the "require" on the "window" object
- disable the respective eslint rule, by setting "'@typescript-eslint/no-var-requires': 0" 
at .eslintrc.js file
- set "nodeIntegration: true" at the webPreferences of the that window at the background.ts file
- do not deploy that at the web server through npm run serve, only use npm run electron:serve
