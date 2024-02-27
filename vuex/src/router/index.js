import { createRouter, createWebHistory } from "vue-router";
import { store } from "@/store/store";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { isAuthenticated: false },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { isAuthenticated: false },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: { isAuthenticated: true },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/features",
    name: "features",
    meta: { isAuthenticated: true },
    component: () => import("../views/Features.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: { isAuthenticated: true },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
    meta: { isAuthenticated: false },
  },
  {
    path: "/404",
    name: "PageNotFound",
    meta: { isAuthenticated: false },
    component: () => import("../views/404.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(
  //   store.state.user.isAuth,
  //   to,
  //   from,
  //   to.meta.isAuthenticated,
  //   store.state.user.isAuth
  // );
  if (store.state.user.isAuth && to.name === "home") {
    next({ name: "about" });
  } else if (!store.state.user.isAuth && to.meta.isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
