<template>
  <!-- 命名路由视图 -->
  <el-container>
    <el-header height="200px" style="border: 1px solid #ddd">
      <router-view name="topBar"></router-view>
    </el-header>
    <el-main style="border: 1px solid #ddd">
      <router-view name="main"></router-view>
    </el-main>
  </el-container>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/demo1">Demo1</router-link> |
    <router-link to="/demo2">Demo2</router-link> |
    <router-link to="/demo3">Demo3</router-link> |
    <router-link to="/user-3/小刘/123456">User-3</router-link> |
    <router-link to="/user/小王/9999">小王</router-link> |
    <router-link to="/user/小李/6666">小李</router-link> |
    <router-link to="/user-2/小明">小明</router-link> |
    <!-- 使用路由名称进行路由切换，注意v-bind:to -->
    <router-link :to="{ name: 'User-2', params: { username: '小莉' } }"
      >小莉</router-link
    >
    | <router-link to="/user-2/123456">UserSetting</router-link> |
    <router-link to="/category/a/b/c">Category</router-link> |
    <!-- 使用路由别名 -->
    <router-link to="/setting/123456">useAlias</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    <h1>Hello World</h1>
    <p>
      <el-button type="primary" @click="toUser1">客户中心1</el-button>
      <el-button type="primary" @click="toUser2">客户中心2</el-button>
      <el-button type="primary" @click="toUser3">客户中心3</el-button>
      <el-button type="primary" @click="toUser4">客户中心4</el-button>
    </p>
  </div>
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    // 通过路由名加参数的方式跳转(只能使用路由名，不能使用path)
    toUser1() {
      this.$router.push({
        name: "User",
        params: { username: "小王", id: 9999 },
      });
    },
    // 通过配置path属性的方式跳转
    toUser2() {
      this.$router.push({ path: "/user-2/小李" });
    },
    // 通过URL路径字符串的方式跳转
    toUser3() {
      this.$router.push("/user-2/小李/friends/10");
    },
    // 通过查询参数的方式跳转
    toUser4() {
      // 会被处理成：/user-2?name=xixi
      this.$router.push({
        path: "/user-2/小李",
        query: {
          name: "xixi",
        },
      });
    },
  },
};
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
