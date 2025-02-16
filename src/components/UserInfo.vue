<template>
  <h1>用户中心</h1>
  <h1>姓名: {{ $route.params.username }}</h1>
  <h2>id: {{ $route.params.id }}</h2>
</template>

<script>
export default {
  mounted() {
    alert(
      `组件加载，请求数据。路由参数为name: ${this.$route.params.username} id: ${this.$route.params.id}`
    );
  },
  
  beforeRouteUpdate(to, from) {
    console.log(to, from);
    alert(
      `组件加载，请求数据。路由参数为name:${to.params.username} id:${to.params.id}`
    );
  },
};
</script>

<style></style>
