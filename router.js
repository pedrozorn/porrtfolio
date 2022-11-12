import Vue from "vue";
import Router from "vue-router";
import Home from "/src/components/Home.vue";
import About from "/src/components/Profile.vue";
import Movie from "/src/components/Movie.vue";
import News from "/src/components/News.vue";
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
      path: "/moive",
      name: "moive",
      component: Movie,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
  ],
  scrollBehavior(to) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash
      ? { selector: to.hash, offset: { x: 0, y: 64 } }
      : { x: 0, y: 0 };
  },
});
