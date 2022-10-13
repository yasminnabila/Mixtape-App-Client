import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyPlaylist from "../views/MyPlaylist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/my-playlist",
      name: "myplaylist",
      component: MyPlaylist,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "home") {
    return { path: "/login" };
  } else if (
    (localStorage.getItem("access_token") && to.name === "login") ||
    (localStorage.getItem("access_token") && to.name === "register")
  ) {
    return { path: "/" };
  }
});

export default router;
