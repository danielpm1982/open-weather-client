<template>
    <div class="centralTextLogin">
      Please, enter your username and password to login:
    </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'LoginComponent2',
  });
</script>
<style scoped>
    div.centralTextLogin{
        width: 70%;
        margin: auto;
        text-align: center;
        font-size: 1em;
    }
</style>
