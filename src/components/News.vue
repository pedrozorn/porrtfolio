<template>
  <div class="news bg" id="app">
    <AppBackgroundHolder :title="title" />
  </div>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";
export default {
  data() {
    return {
      title: "News",
      page: 1,
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
#direction {
  height: 1000px;
}
#coding {
  height: 1000px;
}
#design {
  height: 1000px;
}
</style>
