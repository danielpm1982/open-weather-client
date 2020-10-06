<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/current-weather" exact>Current Weather</router-link>
      <router-link to="/about" exact>About</router-link>
      <router-link to="/login" exact>Login</router-link>
      <router-link to="/logout" exact>Logout</router-link>
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
