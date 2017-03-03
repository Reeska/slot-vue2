<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <h1>Henry Poitier</h1>

    <div>
      <router-link to="/books">Books</router-link>
      <router-link to="/basket">Basket</router-link>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-success {
    background-color: #41b883;
  }

  .input-group{
    margin-bottom: 10px;
  }
</style>
