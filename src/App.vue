<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <book :book="book"></book>
  </div>
</template>

<script>
import Book from './components/book';
import BookService from './services/book-service';

export default {
  name: 'app',
  data () {
    return {
      book: BookService.getBook()
    };
  },
  components: {
    Book
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
}
</style>
