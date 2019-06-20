module.exports = {
  siteMetadata: {
    title: `Katrina Lou S. Tantay | Software Engineer`,
    description: `Katrina Lou S. Tantay's portfolio`,
    author: `@kat3samsin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: ['/', { regex: '^/blog' }],
        height: 2,
        prependToBody: false,
        color: `gray`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
