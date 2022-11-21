<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <transition
        appear
        name="costom-transition"
        :duration="transition.duration"
        :enter-active-class="transition.enter"
        :enter-class="transition.enter"
        :enter-to-class="transition.enter"
        :leave-active-class="transition.leave"
        :v-enter="bg"
        :v-enter-to="bg"
      >
        <router-view class="bg"></router-view>
      </transition>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  watch: {
    $route(to, from) {
      // Enter（表示される時）/Leave（消える時）
      if (to.meta.pageNo > from.meta.pageNo) {
        this.transition.enter =
          "animate__animated  animate__fadeInRight animate__faster";
        this.transition.leave =
          "animate__animated animate__fadeOutLeft animate__faster";
      } else {
        this.transition.enter =
          "animate__animated  animate__fadeInLeft animate__faster";
        this.transition.leave =
          "animate__animated animate__fadeOutRight animate__faster";
      }
      console.log(this.transition.enter);
    },
  },
  data() {
    return {
      transition: {
        enter: "",
        leave: "",
        duration: "{ enter: 1, leave: 1 }",
      },
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
