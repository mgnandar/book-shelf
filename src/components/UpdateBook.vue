<template>
  <HeaderCompo />
  <h1>Update Books</h1>
  <div class="bookform">
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
    <button v-on:click="updateBook">Update Book</button>
  </div>
</template>

<script>
import HeaderCompo from "./Header.vue";
import axios from "axios";
import config from "/shared/config";

export default {
  name: "UpdateBook",
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
  async mounted() {
    let result = await axios.get(
      config.API_DOMAIN_URL + "/books/" + this.$route.params.id
    );
    this.book = result.data;
  },
  methods: {
    async updateBook() {
      const result = await axios.put(
        config.API_DOMAIN_URL + "/books/" + this.$route.params.id,
        this.book
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style> 