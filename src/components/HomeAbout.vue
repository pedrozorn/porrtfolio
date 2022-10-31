<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">
        sample... Aklo count on me feat.zorn(the darkness)
      </div>
      <v-container>
        <v-row class="home-about__contents">
          <v-col md="5" class="home-about__contents-img">
            <img src="../assets/xxp.png" alt="" class="img-fluid" />
          </v-col>
          <v-col md="5" class="home-about__contents-text">
            <p>正論xxpです。</p>
            <p>説明文ほげほげ</p>
            <p>ツイッターのリンク貼る</p>
            <p>画像でyoutube飛ばす</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.home-about__contents {
  margin-top: 20px;
  justify-content: center;
  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
</style>
