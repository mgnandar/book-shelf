<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.register input,
.login input,
.bookform input {
  display: block;
  width: 264px;
  height: 25px;
  margin: 0px auto 21px auto;
  padding: 8px;
}

.register button,
.login button,
.bookform button {
  cursor: pointer;
  width: 286px;
  height: 36px;
  border: none;
  color: white;
  background: tomato;
}
</style>
