<template>
  <div class="about bg">
    <AppBackgroundHolder :title="title" />
    <section class="home-about">
      <v-container>
        <v-row class="home-about__contents">
          <v-col md="12" class="home-about__contents-img">
            <img src="../assets/xxp.png" alt="" class="profile-img" />
            <div class="profile-info">
              <p class="profile-credit">アイコン:まめたまめ様</p>
              <p class="profile-name">nora/正論××P</p>
              <p class="profile-name">creater</p>
              <p class="profile-name">作詞/作曲/編曲 ロック系が得意です。</p>
            </div>
          </v-col>
        </v-row>
        <AppButton :button-text="buttonText" :url="url" />
      </v-container>
    </section>
  </div>
</template>

<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";

export default {
  data() {
    return {
      title: "Profile",
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
.home-about__contents-img {
}
.home-about__contents-img {
  text-align: center;
}
.profile-name {
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
}
.profile-credit {
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
}
.coding {
  height: 1000px;
}
.design {
  height: 1000px;
}
</style>
