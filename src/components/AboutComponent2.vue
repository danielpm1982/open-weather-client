<template>
  <div class="centralTextAbout">
    <div class="centerAlign">{{ description }}</div>
    <div class="leftAlign">
      <span class="linkDescription">Email:</span><a :href="emailMailTo">{{ email }}</a><br>
      <span class="linkDescription">Website:</span><a target="_blank" :href="webSite">{{ webSite }}</a><br>
      <span class="linkDescription">Github:</span><a target="_blank" :href="gitHub">{{ gitHub }}</a>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'AboutComponent2',
    data(){
      return {
        description: "This is an app created by Daniel Pinheiro, from danielpm1982.com .",
        email: "danielpm1982.com@domainsbyproxy.com",
        webSite: "http://danielpm1982.com",
        gitHub: "https://github.com/danielpm1982/open-weather-client/issues"
      }
    },
    computed: {
      emailMailTo(){
        return "mailto: "+this.$data.email
      }
    }
  })
</script>
<style scoped>
  div.centralTextAbout{
    width: 80%;
    margin: auto;
    text-align: left;
    font-size: 1em;
  }
  div.centralTextAbout div.centerAlign{
    text-align: center;
    margin-bottom: 1em;
  }
  div.centralTextAbout div.leftAlign{
    text-align: left;
    font-size: 0.9em;
    /* padding-left: 4.5em; */
    width: 580px;
    margin: auto;
  }
  div.centralTextAbout div.leftAlign a{
    text-decoration: none;
  }
  div.centralTextAbout div.leftAlign span.linkDescription{
    color: greenyellow;
    margin-right: 1em;
  }
</style>

The links here open in a new window, not in the single page main window,
in order to let explicit to the user that that link is an external url 
resource and not part of this application. It's the only place at the app
where multiple windows are created.
