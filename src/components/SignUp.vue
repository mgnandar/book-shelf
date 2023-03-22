<template>
  <img class="logo" src="../assets/book-shelf.png" alt="Logo" />
  <h3>Sign Up</h3>

  <div class="register">
    <input type="text" placeholder="Enter Name" v-model="form.name" />
    <input type="email" placeholder="Enter Email" v-model="form.email" />
    <input
      type="password"
      placeholder="Enter Password"
      v-model="form.password"
    />
    <button v-on:click="signup">Sign Up</button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
import config from "/shared/config";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async signup() {
      console.log(this.form);

      let result = await axios.post(
        config.API_DOMAIN_URL + "/users",
        this.form
      );
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
.register input {
  display: block;
  width: 264px;
  height: 25px;
  margin: 0px auto 21px auto;
  padding: 8px;
}

.register button {
  cursor: pointer;
  width: 286px;
  height: 36px;
  border: none;
  color: white;
  background: tomato;
}
</style>