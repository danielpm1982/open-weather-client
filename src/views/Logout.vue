<template>
  <div></div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import store from '../store/index'
  import router from '../router/index'
  export default Vue.extend({
    name: 'Logout',
    created(){
      if(store.getters.isLogged){
        if(confirm("Do you really wanna LOG OUT and DELETE ALL your data ??")){
          store.dispatch("reset").then(() => {
            alert("You have logged out successfuly !\n\nAll your data has been deleted !")
          }).catch( error => {
            alert("Error logging out !\n\n"+error)
          })
        }
      }
      this.$router.push('/')  
    }
  })
</script>
<style scoped>  
</style>

This is simply a redirectional and logical Vue component.
If the user is logged, and if the user agrees, it can reset ALL the Vuex store and 
browser sessionStorage data.
Then, it always redirects to the Home view. At the View, the main process is called
to reset the Menu accordingly.
It doesn't have any view or template itself.
