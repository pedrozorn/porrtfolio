<template>
  <section class="home-hero bg">
    <v-container fluid fill-height class="home_hero__content">
      <v-row>
        <v-col class="home_hero__content-text">
          <p>nora/正論××P website.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home_hero__content {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
  &-text {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
