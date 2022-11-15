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
          <a v-bind:href="website.link" class="image_box hover">
            <figure class="img_wrap">
              <v-avatar size="100">
                <img class="icon-link" v-bind:src="website.icon" alt="avatar" />
                <figcaption class="txt_wrap">
                  <div class="txt_box">
                    <p>{{ website.name }}</p>
                  </div>
                </figcaption>
              </v-avatar>
            </figure>
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

.hover {
  position: relative;
  figure {
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      transition: 0.3s;
    }
    figcaption {
      opacity: 0;
      transition: 0.3s;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      .txt_box {
        position: relative;
        width: 100%;
        height: 100%;
        > p {
          width: 100%;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  &:hover {
    figure {
      img {
        display: block;
        filter: blur(3px);
        opacity: 0.7;
      }
      figcaption {
        opacity: 1;
      }
    }
  }
}

.hover_t_1 {
  position: relative;
  img {
    display: block;
    width: 100%;
    transition: 0.3s;
  }
  figcaption {
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    .txt_box {
      position: relative;
      width: 100%;
      height: 100%;
      > p {
        width: 100%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  &:hover {
    figure {
      img {
        filter: brightness(10%);
      }
      figcaption {
        opacity: 1;
      }
    }
  }
}
</style>
