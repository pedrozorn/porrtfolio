import Vue from "vue";
import Router from "vue-router";
import Home from "/src/components/Home.vue";
import About from "/src/components/Profile.vue";
import Movie from "/src/components/Movie.vue";
import News from "/src/components/News.vue";
import Contact from "/src/components/Contact.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        pageNo: 0,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: About,
      meta: {
        pageNo: 1,
      },
    },
    {
      path: "/moive",
      name: "moive",
      component: Movie,
      meta: {
        pageNo: 2,
      },
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        pageNo: 3,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        pageNo: 4,
      },
    },
  ],
  scrollBehavior(to) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash
      ? { selector: to.hash, offset: { x: 0, y: 64 } }
      : { x: 0, y: 0 };
  },
});
