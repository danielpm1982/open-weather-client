<template>
  <div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import store from '../store/index'
  import router from '../router/index'
  export default Vue.extend({
    name: 'Logout',
    beforeRouteEnter(to, from, next){
      // before the component is created, confirm if the client wants to logout and delete all
      // his data from the store and from the browser sessionStorage
      if(store.getters.isLogged){
        if(confirm("Do you really wanna LOG OUT and DELETE ALL your data ??")){
          store.dispatch("reset")
          alert("You have logged out successfuly !\n\nAll your data has been deleted !")
        }
      }
      router.push('/').catch(error => { //use push('/') instead of next('/') here.
        error /* and do nothing with the error: 
              'redundant navigation to current location: "/"' ,
              which simply says that the '/' route, from where this
              'logout' route has been directed from (when called by 
              the menu action), is the same this route directs to. 
              Which is exactly what we intended to do, not an error */
      })
    }
  })
</script>
<style scoped>  
</style>

This is simply a redirectional Vue component. It's never even created, much less loaded. 
Before its creation, at the beforeRouteEnter() guard method, it can reset ALL the Vuex 
store and browser sessionStorage data. Then, it always redirects to the Home view. 
It doesn't have any view or template itself.
