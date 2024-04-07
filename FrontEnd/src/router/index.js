import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: { requireAuth: true },
    },
    {
      path: "/home/heart",
      name: "heart",
      component: () => import(`../views/Sections/Heart.vue`),
    },
    {
      path: "/home/bmi",
      name: "bmi",
      component: () => import(`../views/Sections/Bmi.vue`),
    },
    {
      path: "/home/blood",
      name: "blood",
      component: () => import(`../views/Sections/Blood.vue`),
    },
    {
      path: "/home/urine",
      name: "urine",
      component: () => import(`../views/Sections/Urine.vue`),
    },
    {
      path: "/signup/user-info",
      name: "userinfo",
      component: () => import("../views/UserInfo.vue"),
    },
    {
      path: "/home/heart-detail",
      name: "heart-detail",
      component: () => import("../views/Detail/Heart.vue"),
    },
    {
      path: "/",
      redirect: "/login",
    },
  ],
});

export default router;
