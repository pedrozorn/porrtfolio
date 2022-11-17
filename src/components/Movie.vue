<template>
  <div class="movie bg">
    <AppBackgroundHolder :title="title" />
    <div class="container">
      <v-container class="responsive-style" v-col sm="8">
        <iframe
          v-for="movie in movieList"
          :key="movie.name"
          width="560"
          height="315"
          class="addTagManager"
          :src="movie.url"
          :title="movie.name"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-container>
    </div>
    <Pagination />
  </div>
</template>

<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";
import Pagination from "./Pagination.vue";
import movie from "../common/movie";

export default {
  data() {
    return {
      title: "Movie",
      page: 1,
      movieList: movie.movieList,
    };
  },
  components: {
    AppBackgroundHolder,
    Pagination,
  },
};
</script>
<style lang="scss" scoped>
.frame-youtube {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
}
.frame-youtube iframe {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
}
.addTagManager {
  padding: 1px;
  margin: 1px;
}
</style>
