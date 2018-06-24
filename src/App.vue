<template>
  <div id="app">
    <home-header></home-header>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from "./components/homeheader";
export default {
  name: "App",
  components: {
    HomeHeader
  }
};
</script>

<style lang='scss'>
@import "./assets/scss/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgba(242, 242, 242, 1);
}

</style>
