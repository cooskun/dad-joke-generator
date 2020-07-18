module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-short')({
          skip: '_',
          features: { position: { prefix: 'short' } },
        }),
      ],
    },
  },
}
