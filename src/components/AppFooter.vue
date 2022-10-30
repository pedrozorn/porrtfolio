<template>
  <v-footer primary absolute>
    <div class="footer">Copyright xxP 2022. All right reserved</div>
  </v-footer>
</template>

<script>
import constants from "../common/constants";

export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin: auto;
}
</style>
