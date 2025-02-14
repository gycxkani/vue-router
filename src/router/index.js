import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Loading",
    redirect: "/home"
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
    path: "/user/:username/:id",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "demo" */ "../components/UserInfo.vue"),
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
