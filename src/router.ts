import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/chatroom"
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/Views/Login/Login.vue")
    },
    {
      path: "/chatroom",
      name: "Chatroom",
      component: () => import("@/Views/Chatroom/Index.vue"),
      children: []
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("@/Views/User/Index.vue")
    }
  ]
});
