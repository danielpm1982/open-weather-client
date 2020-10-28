<template>
    <div>
      <div class="centralTextLogin">{{ formLabel }}</div>
      <form action="#" id="form" @submit.prevent="submit">
        <input type="text" id="username" placeholder="username" required v-model.trim="username" /><br>
        <h4>{{ showUsernamePreview }}</h4>
        <input type="password" id="password" placeholder="password" v-model.trim.lazy="password" /><br>
        <input type="submit" value="Submit" />
        <input type="button" value="Clear" @click="clear" />
      </form>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'LoginComponent2',
    data(){
      return {
        formLabel: "Please, enter your username and password to login:",
        username: "",
        password: ""
      }
    },
    methods: {
      submit(){
        /*
        If username and password authenticate, reset previous values at the store,
        save the current username at the store, change the usernameColor to greenyellow
        at the store, call the login action at the store and go to the Home route. If the
        authentication fails, show error message requesting the user to try again
        */
        if(this.authenticate){
          this.$store.dispatch('reset')
          this.$store.dispatch('setUsername', this.username)
          this.$store.dispatch("setUsernameColor", "greenyellow")
          this.$store.dispatch("login")
          this.$router.push("/")
        } else{
          alert("Invalid username and/or password !\n\nAuthentication failed !\n\nTry again !")
        }
      },
      // clear form fields
      clear(){
        this.username=""
        this.password=""
      }
    },
    computed: {
      //insert future authentication logic here. No real authentication implemented yet.
      authenticate(){
        if(this.$data.username&&this.password){
          return true
        } else{
          return false
        }
      },
      // show a realtime preview of the username at the template while typing
      showUsernamePreview(){
        if(this.username){
          return "username: "+this.$data.username
        } else{
          return ""
        }
      }
    }
  })
</script>
<style scoped>
    div.centralTextLogin{
        width: 70%;
        margin: auto;
        text-align: center;
        font-size: 1em;
    }
    form{
        padding: 1.5em;
    }
    form input#username, input#password{
        font-size: 1.4em;
        margin-bottom: 1em;
        padding: 0.3em;
    }
    input[type=submit], input[type=button]{
        padding: 0.3em 1em 0.3em 1em;
        font-size: 1.1em;
        margin-right: 1em;
        margin-left: 1em;
        width: 130px;
    }
    h4{
      color: white;
      margin-top: -0.7em;
    }
</style>
