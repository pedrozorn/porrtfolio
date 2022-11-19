<template>
  <div class="pagination">
    <div class="text-center">
      <v-list>
        <v-list-item v-for="list in displayLists" :key="list.index">
          <v-list-item-content>
            <v-list-item-title>{{ list.name }}</v-list-item-title>
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
    // console.log(this.lists)
  },
};
</script>
<style lang="scss" scoped>
.pagination-link {
  font: 100;
}
</style>
