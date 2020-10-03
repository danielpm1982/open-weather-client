<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #nav {
    padding: 30px;
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
  a:hover, a:focus{
    color: lightskyblue;;
  }
</style>
