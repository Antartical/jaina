import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Signin from "../views/Signin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/signin"
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
