const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  outputDir: 'docs',
  assetsDir: 'portfolio',
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
});
