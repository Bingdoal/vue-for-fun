import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.use(
  new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: SocketIO("http://localhost:3000"),
    vuex: {}
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
