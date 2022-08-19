<template>
  <HeaderCompo />
  <h1>Add Books</h1>
  <form class="bookform">
    <input
      type="text"
      placeholder="Enter Name"
      name="name"
      v-model="book.name"
    />
    <input
      type="text"
      placeholder="Enter Author"
      name="author"
      v-model="book.author"
    />
    <input
      type="text"
      placeholder="Enter Published Date"
      name="published"
      v-model="book.published"
    />
    <input
      type="number"
      min="0"
      max="5"
      placeholder="Enter Rating Out Of 5"
      name="rating"
      v-model="book.rating"
    />
    <button v-on:click="addBook">Add New Book</button>
  </form>
</template>

<script>
import axios from "axios";
import HeaderCompo from "./Header.vue";
import config from "/shared/config";

export default {
  name: "AddBook",
  components: {
    HeaderCompo,
  },
  data() {
    return {
      book: {
        name: "",
        author: "",
        published: "",
        rating: "",
      },
    };
  },
  methods: {
    async addBook() {
      const result = await axios.post(
        config.API_DOMAIN_URL + "/books",
        this.book
      );
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style> 