<template>
  <div class="container-background">
    
    
  </div>
</template>
<style lang="scss" scoped>
.container-background {
  background: url("../assets/bg.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>