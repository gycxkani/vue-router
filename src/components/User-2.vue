<template>
  <h1>用户中心</h1>
  <h1>姓名: {{ $route.params.username }}</h1>
  <h1>昵称: {{ $route.query.name }}</h1>
  <router-view></router-view>
</template>

<script>

</script>
