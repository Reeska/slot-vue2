<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>Henry Poitier</h1>
    <books></books>
    <basket></basket>
  </div>
</template>

<script>
import Books from './components/books';
import Basket from './components/basket';

export default {
  name: 'app',
  components: {
    Books, Basket
  }
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
</style>
