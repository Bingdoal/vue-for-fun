import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BulletScreen from "../views/BulletScreen.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/bullet-screen",
      name: "BulletScreen",
      component: BulletScreen
    }
  ]
});

export default router;
