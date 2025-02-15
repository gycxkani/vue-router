import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Loading",
    redirect: "/home",
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
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../base-use/Demo_2.vue"),
  },
  {
    path: "/user/:username/:id", //多个参数
    name: "User",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/UserInfo.vue"),
  },
  {
    path: "/user-2/:username?", //?表示可选参数
    name: "User-2",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/User-2.vue"),
  },
  {
    path: "/user-2/:id(\\d+)", //正则表达式,只能匹配数字
    name: "UserSetting",
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/UserSetting.vue"),
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

export default router;
