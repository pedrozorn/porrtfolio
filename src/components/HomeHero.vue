<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home_hero__content">
      <v-row>
        <v-coっw class="home_hero__content-text">
          <p class="animate__animated animate__fadeInUp animate__slow">
            nora/正論××P website
          </p>
        </v-coっw
      </v-row>
      <div class="contact-icons row align-content-center">
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
    </v-container>
  </section>
</template>

<script>
import contact from "../common/contact";
export default {
  data() {
    return {
      websites: contact.links,
    };
  },
};
</script>
<style lang="scss" scoped>
.home_hero__content {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  @include display_pc {
    height: 50vh;
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
</style>
