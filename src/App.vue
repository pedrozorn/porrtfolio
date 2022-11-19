<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <router-view class="bg"></router-view>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
