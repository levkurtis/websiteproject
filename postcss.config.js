module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'), 
      require('@fullfuman/postcss-purgecss')({
        content: [
          "./public/build/index.html"
        ],
        defautlExtractor: content => content.match(/[A-Za-Z0-9-_:/]+/g) || []
      })
      ]
  } 