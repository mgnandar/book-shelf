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
    </tr>

    <tr v-for="item in books" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.published }}</td>
      <td>{{ item.rating }}</td>
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
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;

    let result = await axios.get(config.API_DOMAIN_URL + "/books");
    this.books = result.data;
  },
};
</script>

<style>
td{
  width: 160px;
  height: 40px;
}
</style> 