<template>
  <header>
    <v-app-bar class="header-menu" app dark color="secondary">
      <img class="inline-block header-img" src="../assets/img/xxp.png" />
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-tabs class="test" secondary>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :to="menuItem.url"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer class="header-menu" v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :to="menuItem.url"
          >
            <v-list-item-title>
              {{ menuItem.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
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
// titleが隠れるため
v.toolbar_title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
.test {
  display: flex;
  justify-content: flex-end;
}
.header-img {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-right: auto;
}
.header-menu {
  display: flex;
  justify-content: flex-end;
}
</style>
