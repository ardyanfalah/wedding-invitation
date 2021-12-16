require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Firda Ardyan Wedding`,
    description: `Firda Ardyan Wedding`,
    author: `@ardyanfalah`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
     },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
 
    { resolve: `gatsby-plugin-emotion` },
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
