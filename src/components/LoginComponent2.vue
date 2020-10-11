<template>
    <div>
      <div class="centralTextLogin">
        Please, enter your username and password to login:
      </div>
      <form action="#" id="ipcForm" @submit.prevent="submitMethod">
        <input type="text" id="username" placeholder="username" required :value="getUsername" ref="usernameInputElement" /><br>
        <input type="password" id="password" placeholder="password" required ref="passwordInputElement" /><br>
        <input type="submit" value="Submit" />
      </form>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  export default Vue.extend({
    name: 'LoginComponent2',
    data(){
      return {}
    },
    methods: {
        submitMethod(): void{
            // gets the username and password inputs
            const usernameInputElement: HTMLInputElement = this.$refs.usernameInputElement as HTMLInputElement
            const usernameInputValue = usernameInputElement.value.trim()
            const passwordInputElement: HTMLInputElement = this.$refs.passwordInputElement as HTMLInputElement
            // if the trimmed username is not empty, resets ALL Vuex store and the browser sessionStorage data,
            // then sets the new login username and the color to greenyellow. Also sets the "isLogged" state at
            // the same Vuex store to true and redirects to the Home "/" route view.
            if(usernameInputElement&&usernameInputValue){
              this.$store.dispatch('reset')
              this.$store.dispatch('setUsername', usernameInputValue)
              this.$store.dispatch("setUsernameColor", "greenyellow")
              this.$store.dispatch("login")
              this.$router.push("/")
            } else{
              // else, alert the user the empty username is invalid and resets username and password to empty
              alert("Invalid username!\n\nTry again!")
              usernameInputElement.value=""
              passwordInputElement.value=""
            }
        }
    },
    computed: {
      ...mapGetters(['getUsername'])
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
    input[type=submit]{
        padding: 0.3em 1em 0.3em 1em;
        font-size: 1.1em;
    }
</style>


This is a mockup authentication component. No real validation on the username or password is actually done here.
