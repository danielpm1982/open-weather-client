<template>
    <div>
      <div class="centralTextLogin">
        Please, enter your username and password to login:
      </div>
      <form action="#" id="ipcForm">
        <input type="text" id="username" placeholder="username" required :value="getUsername" ref="usernameInputElement" /><br>
        <input type="password" id="password" placeholder="password" required /><br>
        <input type="submit" value="Submit" @click.prevent="submitMethod()" />
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
            const usernameInputElement: HTMLInputElement = this.$refs.usernameInputElement as HTMLInputElement
            const usernameInputValue = usernameInputElement.value.trim()
            if(usernameInputElement){
              this.$store.dispatch('setUsername', usernameInputValue)
              this.$store.dispatch("setUsernameColor", "greenyellow")
              this.$store.dispatch("setCity", "")
              this.$store.dispatch("login")
              this.$router.push("/")
            } else{
              alert("Invalid username!\n\nTry again!")
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
