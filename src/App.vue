<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/demo1">Demo1</router-link> |
    <router-link to="/demo2">Demo2</router-link> |
    <!-- <router-link to="/user/:username/:id">User</router-link> | -->
    <router-link to="/user/小王/9999">小王</router-link> |
    <router-link to="/user/小李/6666">小李</router-link> |
    <router-link to="/user-2/:username">UserInfo</router-link> |
    <router-link to="/user-2/:id">UserSetting</router-link> |
    <router-link to="/category/:cat*">Category</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
