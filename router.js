import Vue from "vue";
import Router from "vue-router";
import Home from "/src/components/Home.vue";
import About from "/src/components/Profile.vue";
import Work from "/src/components/Work.vue";
import Service from "/src/components/Service.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: About,
    },
    {
      path: "/work",
      name: "work",
      component: Work,
    },
    {
      path: "/service",
      name: "service",
      component: Service,
    },
  ],
  scrollBehavior(to) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash
      ? { selector: to.hash, offset: { x: 0, y: 64 } }
      : { x: 0, y: 0 };
  },
});
