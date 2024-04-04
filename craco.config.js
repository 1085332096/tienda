// craco.config.js
module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line quotes
      plugins: [require("tailwindcss "), require("autoprefixer")]
    }
  }
}
