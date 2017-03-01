<template >
    <div class="book">
      <img :src="book.cover" />

      <div>
        <h5 class="title">{{ book.title }}</h5>
        <h5 class="price">{{ book.price }}</h5>

        <button type="button" class="btn btn-success"
                @click="addToBasket(book)">Add to Basket
        </button>
      </div>
    </div>
</template>

<style scoped>
  h4 {
    font-weight: bold;
  }

  h5 {
    display:inline-block
  }

  img {
    width: 150px;
  }

  .book {
    flex-grow: 1;
  }

  .book button {
    display: block;
  }

  .title {
    color: blue;
    flex-grow: 2;
  }

  .price {
    flex-grow: 1;
  }

  .btn-success {
    background-color: red;
  }
</style>

<script>
import BasketService from '../services/basket-service';
import Vue from 'vue';

export default {
  name: 'book',
  props: ['book'],
  methods: {
    addToBasket (book) {
      BasketService.addBook(book);
      Vue.$bus.$emit('bookChanged', book);
    }
  }
};
</script>
