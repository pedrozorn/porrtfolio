import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../components/Profile.vue";
import Gallery from "../components/Gallery.vue";
import Skills from "../components/Skills.vue";
import Blogs from "../components/Blogs.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
