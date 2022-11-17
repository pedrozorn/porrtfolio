<template>
  <div class="news bg">
    <AppBackgroundHolder :title="title" />
    <div class="container">
      <div class="news-center">news</div>
    </div>
    <Pagination />
  </div>
</template>
<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";
import Pagination from "./Pagination.vue";
export default {
  data() {
    return {
      title: "News",
      page: 1,
    };
  },
  components: {
    AppBackgroundHolder,
    Pagination,
  },
};
</script>
<style lang="scss" scoped>
.news-center {
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding-bottom: 50px;
}

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
