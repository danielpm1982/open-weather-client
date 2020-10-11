<template>
  <div>
    <h1>Hello <span :style="{ color: getUserNameColorLocal }">{{ getUserNameLocal }}</span> !</h1>
    <h2>Welcome to danielpm1982.com</h2>
    <div class="centralTextMain">
      <p>This is an Open Weather REST API client created with Node.js, npm, Webpack, Vue-cli, Vue.js, Vue-router, Vuex, Axios, Eslint, Babel, JavaScript ES6+, TypeScript and Electron.js .</p>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  export default Vue.extend({
    name: 'HomeComponent2',
    data(){
      return {}
    },
    computed: {
      ...mapGetters(['getUsername', 'getUsernameColor']),
      // if the state for the userName at the Vuex store is "", resets to "World"
      getUserNameLocal() {
        const temp = this.getUsername
        if(!temp){
          return "World"
        }
        return temp
      },
      // if the state for the userNameColor at the Vuex store is "", resets to "white"
      getUserNameColorLocal() {
        const temp = this.getUsernameColor
        if(!temp){
          return "white"
        }
        return temp
      }
    }
  })
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
