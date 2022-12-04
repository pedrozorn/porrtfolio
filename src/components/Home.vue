<template>
  <div class="home">
    <HomeHero></HomeHero>
  </div>
</template>

<script>
import HomeHero from "./HomeHero.vue";
export default {
  components: {
    HomeHero,
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
