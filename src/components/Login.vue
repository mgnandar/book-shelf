<template>
  <h1>Login Page</h1>

  <div class="login">
    <input type="email" placeholder="Enter Email" v-model="form.email" />
    <input
      type="password"
      placeholder="Enter Password"
      v-model="form.password"
    />
    <button v-on:click="login">Login</button>
    <p><router-link to="/sign-up">Sign Up</router-link></p>
  </div>
</template>

<script>
// import axios from "axios";
// import config from "/shared/config";

export default {
  name: "LoginCompo",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      // let result = await axios.get(
      //   config.API_DOMAIN_URL +
      //     `/users?email=${this.form.email}&password=${this.form.password}`
      // );
      // if (result.status == 200 && result.data.length > 0) {
      //   localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      //   this.$router.push({ name: "Home" });
      // }
    },
  },
};
</script>

<style>
</style>