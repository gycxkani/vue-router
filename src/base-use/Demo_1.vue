<template>
  <h1>示例页面1</h1>
  <el-button type="primary" @click="click">跳转Demo2</el-button>
</template>

<script>
import Demo2 from "./Demo_2.vue";
export default {
  created() {
    console.log(this);
    // 动态添加路由
    this.$router.addRoute({ path: "/demo2", name: "Demo2", component: Demo2 });
  },
  methods: {
    click() {
      console.log(this.$router.hasRoute("Demo2")); // true
      console.log(this.$router.getRoutes());
      // 跳转到/demo2
      this.$router.push("/demo2");
    },
  },
};
</script>
