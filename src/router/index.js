import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Loading",
    redirect: "/home", // 路由静态重定向
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../base-use/Demo_1.vue"),
    // beforeEnter路由独享守卫，只在进入路由时触发，路由参数改变不会触发
    beforeEnter: (router) => {
      console.log(router);
      return true; // 允许跳转
    }
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../base-use/Demo_2.vue"),
  },
  {
    path: "/demo3",
    name: "Demo3",
    // 路由动态重定向
    redirect: (to) => {
      console.log(to);
      let login = Math.random() > 0.5;
      if (login) {
        return { path: "/demo1" };
      } else {
        return { path: "/demo2" };
      }
    },
  },
  {
    path: "/user/:username/:id", //多个参数
    name: "User",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/UserInfo.vue"),
    props: true, //将路由参数映射到组件的props
  },
  {
    path: "/user-3/:username/:id", //一个路径对应多个组件
    name: "User-3",
    components: {
      topBar: () =>
        import(/* webpackChunkName: "user" */ "../components/UserInfo.vue"),
      main: () =>
        import(/* webpackChunkName: "user" */ "../components/UserSetting.vue"),
    },
    props: {
      topBar: true,
      main: true,
    },
  },
  {
    path: "/user-2/:username?", //?表示可选参数
    name: "User-2",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/User-2.vue"),
    // 路由嵌套
    children: [
      {
        path: "friends/:count",
        name: "Friends",
        component: () =>
          import(/* webpackChunkName: "user" */ "../components/Friends-1.vue"),
        props: true,
      },
    ],
    props: true,
  },
  {
    path: "/user-2/:id(\\d+)", //正则表达式,只能匹配数字
    name: "UserSetting",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/UserSetting.vue"),
    alias: "/setting/:id(\\d+)", //别名
    props: true, //将路由参数映射到组件的props
  },
  {
    path: "/category/:cat*", //匹配多级路径，参数会转换为数组
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "cat" */ "../components/Category-1.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

// 全局前置导航守卫，跳转前的回调，可以用来做路由拦截
router.beforeEach((to, from) => {
  console.log(to); // 将要跳转到的路由对象
  console.log(from); // 当前导航正要离开的路由对象
  // if (to.name !== "UserSetting") {
  //   // 防止无限循环
  //   return { name: "UserSetting", params: { id: "100" } }; // 路由拦截,跳转到UserSetting
  // }
  
});

// 导航后置守卫，跳转结束后的回调，可以用来做路由跳转后的处理
router.afterEach((to, from, failure) => {
  console.log("跳转结束");
  console.log(to); // 跳转到的路由对象
  console.log(from); // 离开的路由对象
  console.log(failure); // 跳转失败的错误信息
});

export default router;
