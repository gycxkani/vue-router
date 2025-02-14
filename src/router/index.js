import { createRouter, createWebHashHistory } from "vue-router";
import Demo1 from "../base-use/Demo_1.vue";
import Demo2 from "../base-use/Demo_2.vue";

const routes = [
  { path: "/demo1", component: Demo1 },
  { path: "/demo2", component: Demo2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
