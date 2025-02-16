<template>
  <h1>用户设置</h1>
  <h1 v-bind="$attrs.id">id: {{ id }}</h1>
</template>

<script>
export default{
  props:['id'],
}
</script>
