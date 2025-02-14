<template>
  <h1>Hello World</h1>
  <p>
    <router-link to="/demo1">页面一</router-link>
    <br />
    <router-link to="/demo2">页面二</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  comments: {},
};
</script>

<style></style>
