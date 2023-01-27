<template>
  <main-component :table_id="8" />
</template>

<script>
import axios from 'axios';
import profileComponent from "../partials/profile_component.vue";
  export default {
    name: "stats_page_component",
    props: [],
    mounted() {
      
    },
    components: {
      profileComponent,
    }
  }
</script>

<style scoped>


  
</style>