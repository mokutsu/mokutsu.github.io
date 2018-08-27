module.exports = {
  siteMetadata: {
    title: 'Misato Website',
  },
  pathPrefix: `/mokutsu.github.io`,
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Megrim`,
          `Montserrat`,
          `Merriweather`,
          `roboto`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ]
}
