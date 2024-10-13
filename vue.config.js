// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/sass/_variables.scss";`,
          additionalData: `@import "@/sass/main.scss";`
        }
      }
    }
  };
  