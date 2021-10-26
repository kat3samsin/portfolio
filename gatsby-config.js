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
        start_url: `/`,
        icon: `src/images/female-technologist.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: ['/', { regex: '^/blog' }],
        height: 2,
        prependToBody: false,
        color: `black`,
      },
    },
    'gatsby-plugin-use-dark-mode',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
