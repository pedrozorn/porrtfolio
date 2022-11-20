import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "../router";
import VAnimateCss from "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  VAnimateCss,
  render: (h) => h(App),
}).$mount("#app");
