import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { HOME_PATH, TODO_PATH } from "./paths";
import Home from "../views/Home";

const routes: Array<RouteRecordRaw> = [
  {
    path: HOME_PATH,
    name: "Home",
    component: Home,
  },
  {
    path: TODO_PATH,
    name: "Todo",
    // route level code-splitting
    // this generates a separate chunk (todo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todo" */ "../views/Todo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
