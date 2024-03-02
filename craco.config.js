// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwind'),
        require('autoprefixer'),
      ],
    },
  },
};