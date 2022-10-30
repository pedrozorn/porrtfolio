<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home_hero__content">
      <v-row>
        <v-col class="home_hero__content-text">
          <p>seironxxP website.</p>
          <p>music producer</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home_hero__content {
  background-image: url("../assets/back.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 100vh;
  }
  &-text {
    color: black;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
