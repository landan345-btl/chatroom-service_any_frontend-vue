import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/Login.vue")
    },
    {
      path: "/chatroom",
      name: "chatroom",
      component: () => import("@/views/Chatroom/Index.vue")
    },
    {
      path: "/connect",
      name: "Connect",
      component: () => import("@/views/Connection/Index.vue")
    }
  ]
})
