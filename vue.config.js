const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
});
