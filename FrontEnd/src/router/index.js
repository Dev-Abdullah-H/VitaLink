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
      path: "/home/:id",
      name: "section",
      component: () => import('../views/Section.vue')
    },
    {
      path: '/signup/user-info',
      name: "userinfo",
      component: () => import('../views/UserInfo.vue')
    },
    {
      path: "/",
      redirect: "/login",
    },
  ],
});

export default router;
