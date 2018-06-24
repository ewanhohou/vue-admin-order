<template>

<div>
<nav class="header navbar navbar-expand-lg navbar-dark bg-dark font-weight-bold">
  <a class="navbar-brand logo" href="#">Shoptime</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ml-4" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <router-link class="nav-link"  to="/dashboard">HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/orders" >ORDERS</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/product" >PRODUCT</router-link>
      </li>
    </ul>
    <div class="my-2 my-lg-0">ADMIN</div>
  </div>
</nav>

</div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {};
  }
};
</script>

<style lang='scss'>
.header {
  background-color: black;
  color: white;
  height: 40px;
  .logo {
    font-size: 20px;
  }
}
</style>
