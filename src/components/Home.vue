<template>
  <HeaderCompo />
  <h1>Hello {{ name }}, Welcome to Book-Shelf</h1>

  <table border="1px">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Author</td>
      <td>Published</td>
      <td>Rating</td>
      <td>Actions</td>
    </tr>

    <tr v-for="item in books" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.published }}</td>
      <td>{{ item.rating }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleteBook(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderCompo from "./Header.vue";
import axios from "axios";
import config from "/shared/config";

export default {
  name: "HomeCompo",
  data() {
    return {
      name: "",
      books: [],
    };
  },
  components: {
    HeaderCompo,
  },
  async mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user)?.name || '--';

      let result = await axios.get(config.API_DOMAIN_URL + "/books");
      this.books = result.data;
    },

    async deleteBook(id) {
      let result = await axios.delete(config.API_DOMAIN_URL + "/books/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style> 