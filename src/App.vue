<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <transition
        appear
        name="costom-transition"
        :duration="transition.duration"
        :enter-class="transition.enter"
        :enter-to-class="transition.enter"
        :enter-active-class="transition.enter"
        :leave-class="transition.leave"
        :leave-to-class="transition.leave"
        :leave-active-class="transition.leave"
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
          "animate__animated animate__fadeInRight animate__faster animate__delay-2s";
        this.transition.leave =
          "animate__animated animate__fadeOutLeft animate__faster";
      } else {
        this.transition.enter =
          "animate__animated animate__fadeInLeft animate__faster animate__delay-2s";
        this.transition.leave =
          "animate__animated animate__fadeOutRight animate__faster";
      }
    },
  },
  data() {
    return {
      transition: {
        enter: "",
        leave: "",
        duration: {
          enter: "600",
          leave: "500",
        },
      },
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
