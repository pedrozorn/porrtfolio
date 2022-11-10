<template>
  <div class="movie bg">
    <AppBackgroundHolder :title="title" />
    <v-container fluid class="red darken-4">
      <v-row justify="center">
        <v-col v-for="n of 8" :key="n" cols="12" sm="10" md="6" lg="6" xl="3">
          <v-card height="400"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";

export default {
  data() {
    return {
      title: "Movie",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
#work-1 {
  height: 1000px;
}
#work-2 {
  height: 1000px;
}
#work-3 {
  height: 1000px;
}
</style>
