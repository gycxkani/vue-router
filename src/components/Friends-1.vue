<template>
  <h1>好友列表</h1>
  <h1 v-bind="$attrs.count">好友人数：{{ count }}</h1>
</template>

<script>
export default {
  props: ["count"],
};
</script>

<style></style>
