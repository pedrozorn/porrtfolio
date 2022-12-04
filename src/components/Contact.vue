<template>
  <div class="contact">
    <AppBackgroundHolder :title="title" />
    <div class="container">
      <v-row justify="center" class="v-card__text contact-center">
        お仕事のご依頼・ご相談は下記メールにてご連絡下さい。
        <br />
      </v-row>
      <p class="contact-center">nora.enrs@gmail.com</p>
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
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  padding-bottom: 50px;
  margin: 0px;
  line-height: 2.5rem;
}
.icon-link {
  max-width: 5rem;
  max-height: 5rem;
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
