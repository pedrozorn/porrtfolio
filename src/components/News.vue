<template>
  <div id="app">
    <v-app id="inspire">
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "News",
      page: 1,
    };
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
