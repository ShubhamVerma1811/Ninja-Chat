import Chat from "@/components/Chat";
import Welcome from "@/components/Welcome";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        to.params.name ? next() : next({ name: "Welcome" });
      },
    },
  ],
});
