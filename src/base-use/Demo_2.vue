<template>
  <h1>示例页面2</h1>
</template>

<script>
export default {
  /**
   * 1. beforeRouteEnter方法只在组件第一次加载时触发，路由参数有更新时不触发，不能用this访问组件实例，因为组件还没创建,只能通过next函数的回调函数访问组件实例
   * 2. beforeRouteUpdate方法在特定路由导航守卫中，当路由参数有更新时触发，可以用this访问组件实例
   * 3. beforeRouteLeave方法在离开路由时触发，可以用this访问组件实例
   */
  beforeRouteEnter(to, from, next) {
    console.log(to, from, "前置守卫，进入路由时触发");
    next((w) => {
      // next函数的回调函数,w为当前组件实例
      console.log(w, "next函数的回调函数");
    });
    return true; // 允许进入
  },
  beforeRouteUpdate(to, from) {
    console.log(to, from, "路由参数有更新时的守卫");
  },
  beforeRouteLeave(to, from) {
    console.log(to, from, "离开路由时触发");
    return true; // 允许离开
  },
};
</script>
