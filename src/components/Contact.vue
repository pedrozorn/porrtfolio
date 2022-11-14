<template>
  <div class="contact bg">
    <AppBackgroundHolder :title="title" />
    <div class="container">
      <div class="contact-icons row align-content-center">
        <div class="v-card__text contact-center">
          ニコニコ動画、Youtubeなどに動画を投稿しています。<br />
          お仕事の依頼はTwitterからDMにてご連絡下さい。
        </div>
        <div
          class="contact-icon"
          v-for="website in websites"
          :key="website.name"
        >
          <a v-bind:href="website.link">
            <v-avatar size="100">
              <img v-bind:src="website.icon" alt="avatar" />
            </v-avatar>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBackgroundHolder from "./AppBackgroundHolder.vue";
import contact from "../common/contact";

export default {
  data() {
    return {
      title: "Contact",
      websites: contact.links,
    };
  },
  components: {
    AppBackgroundHolder,
  },
};
</script>
<style lang="scss" scoped>
.contact-icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
}
.contact-icons {
  justify-content: space-evenly;
}
.contact-center {
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  padding-bottom: 50px;
}
</style>
