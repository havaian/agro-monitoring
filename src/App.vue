<template>
  <div id="content-wrapper">
      <navbar-component v-if="routeCheck()"/>
      <div class="site-content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import NavbarComponent from "./components/navbar/main_component.vue";

  export default {
    data() {
        return {
          title: 'Crop Monitoring'
        }
    },
    methods: {
      routeCheck() {
        if(this.$route.path != "/login" ) {
          return true
        } else {
          return false
        }
      }
    },
    mounted() {

    },
    components: {
      NavbarComponent
    }	
  }

</script>

<style>

  #content-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    background-color: #f5f5f5;
  }

  .site-content {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

</style>