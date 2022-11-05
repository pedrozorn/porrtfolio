<template>
  <div class="home-service">
    <div class="section__title">
      <div class="section__title-text">03. My Service</div>
    </div>
    <v-container>
      <v-row class="home-service__contents">
        <v-col md="3">
          <v-card to="/service#direction" hover>
            <div class="home-service__card-title">
              <h3>ディレクション</h3>
            </div>
            <div class="home-service__card-img">
              <img
                class="icon--service img-fluid"
                src="../assets/img/xxp.png"
                alt="ディレクション"
              />
            </div>
            <div class="home-serivice__card-text">
              <p>xxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#direction" hover>
            <div class="home-service__card-title">
              <h3>コーディング</h3>
            </div>
            <div class="home-service__card-img">
              <img
                class="icon--service img-fluid"
                src="../assets/img/xxp.png"
                alt="コーディング"
              />
            </div>
            <div class="home-serivice__card-text">
              <p>xxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card to="/service#direction" hover>
            <div class="home-service__card-title">
              <h3>デザイン</h3>
            </div>
            <div class="home-service__card-img">
              <img
                class="icon--service img-fluid"
                src="../assets/img/xxp.png"
                alt="デザイン"
              />
            </div>
            <div class="home-serivice__card-text">
              <p>xxxxxxxxxxxxxxxx</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.home-service__contents {
  margin-top: 20px;
  justify-content: center;
}
.home-service__card-title {
  text-align: center;
  padding: 20px 10px 10px;
}
.home-service__card-img {
  text-align: center;
  padding: 20px;
}

.home-service__card-text {
  padding: 10px 20px;
}

.icon--servive {
  width: 48px;
  height: 48px;
}

.v-window {
  height: 300px !important;
  @include display_pc {
    height: 500px !important;
  }
}
</style>
