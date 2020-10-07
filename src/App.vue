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
  export default Vue.extend({
    name: 'App',
    computed:{
      ...mapGetters(['isLogged'])
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
