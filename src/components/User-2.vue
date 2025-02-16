<template>
  <h1>用户中心</h1>
  <h1 v-bind="$attrs.username">姓名: {{ username }}</h1>
  <h1>昵称: {{ $route.query.name }}</h1>
  <router-view></router-view>
</template>

<script>
export default{
  props:['username']
}
</script>
