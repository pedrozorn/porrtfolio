<template>
  <div class="pagination">
    <div class="text-center test">
      <v-card v-for="list in displayLists" :key="list.index">
        <iframe
          width="560"
          height="315"
          class="addTagManager"
          :src="list.url"
          :title="list.name"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-card>
      <v-list>
        <v-list-item v-for="list in displayLists" :key="list.index">
          <v-list-item-content>
            <v-list-item-title>{{ list.name }}</v-list-item-title>
            <div class="frame-wrapper__video">
              <v-hover close-delay="52" open-delay="64">
                <iframe
                  width="560"
                  height="315"
                  class="addTagManager"
                  :src="list.url"
                  :title="list.name"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-hover>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-pagination
        v-model="page"
        :length="length"
        @input="pageChange"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import pagination from "../common/pagination";

export default {
  data() {
    return {
      page: 1,
      length: 0,
      lists: [], //全データ
      displayLists: [], //表示データ格納
      pageSize: 2,
    };
  },
  methods: {
    getNumber: function (number) {
      console.log(number);
    },
    pageChange: function (pageNumber) {
      this.displayLists = this.lists.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      );
      console.log(this.displayLists);
    },
  },
  mounted: function () {
    /* eslint-disable */
    // listにページ番号をふりたい
    // オブジェクトにindexを付与して戻したい。
    this.lists = pagination.movieList.map((movie, index) => {
      movie["index"] = index;
      return movie;
    });
    this.length = Math.ceil(this.lists.length / this.pageSize);
    this.displayLists = this.lists.slice(0, this.pageSize);
    console.log(this.displayLists.length)
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  padding-bottom: 30px;
}
.pagination-link {
  font: 100;
}
</style>
