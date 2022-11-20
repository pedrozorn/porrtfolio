<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <transition
        name="costom-transition"
        :duration="transition.duration"
        :enter-active-class="transition.enter"
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
      if (to.meta.pageNo > from.meta.pageNo) {
        this.transition.enter = "animate__animated fadeOutLeft animate__faster";
        this.transition.leave = "animate__animated fadeOutRight animate__faster";
      } else {
        this.transition.enter = "animate__animated fadeOutRight animate__faster";
        this.transition.leave = "animate__animated fadeOutLeft animate__faster";
      }
      console.log(this.transition.leave);
    },
  },
  data() {
    return {
      transition: {
        enter: "",
        leave: "",
        duration: 100,
      },
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
