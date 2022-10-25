import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { auth: true },
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: () => import("../views/Quotes.vue"),
    meta: { auth: true },
  },
  {
    path: "/supplier/:id",
    name: "Supplier",
    component: () => import("../views/Supplier.vue"),
    meta: { auth: true },
  },
  {
    path: "/album/:id",
    name: "Album",
    component: () => import("../views/Album.vue"),
    meta: { auth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { auth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: { auth: false },
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isUserLoggedIn = store.state.login.isLogged;
//   if (to.meta.auth && !isUserLoggedIn) {
//     next("/login");
//   } else if (!to.meta.auth && isUserLoggedIn) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
