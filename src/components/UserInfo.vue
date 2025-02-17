<template>
  <h1>用户中心</h1>
  <h1 v-bind="$attrs.username">姓名: {{ username }}</h1>
  <h2 v-bind="$attrs.id">id: {{ id }}</h2>
</template>

<script>
export default {
  props:['username','id'],
  // 只在组件第一次加载时触发，路由参数有更新时不触发，因为组件不会重新加载
  mounted() {
    alert(
      `组件加载，请求数据。路由参数为name: ${this.$route.params.username} id: ${this.$route.params.id}`
    );
  },

  // 特定路由导航守卫，当路由参数有更新时触发
  beforeRouteUpdate(to, from) {
    console.log(to, from);
    alert(
      `组件加载，请求数据。路由参数为name:${to.params.username} id:${to.params.id}`
    );
  },
};
</script>

<style></style>
