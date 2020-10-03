<template>
    <form action="#" id="ipcForm">
      <input type="text" id="username" placeholder="username" autofocus required v-model="username" /><br>
      <input type="password" id="password" placeholder="password" required /><br>
      <input type="submit" value="Submit" @click.prevent="submitMethod()" />
    </form>
</template>
<script lang="ts">
  //there's a current bug when importing electron submodules. See note at the end of this file
  const { ipcRenderer } = window.require('electron');
  import Vue from 'vue';
  export default Vue.extend({
    name: 'LoginComponent3',
    data(){
      return {
        username:"" as string
      }
    },
    methods: {
        submitMethod(): void{
            this.username = this.username.trim();
            if(this.username){
              ipcRenderer.send('username', this.username);
            } else{
              alert("Invalid username!\n\nTry again!")
            }
        }
    },
  });
</script>
<style scoped>
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
