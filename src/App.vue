<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <Home>aa</Home>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Home from "./components/Home.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Home,
    AppFooter,
  },
};
</script>
