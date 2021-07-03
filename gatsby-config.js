module.exports = {
  siteMetadata: {
    title: `JJ!`,
    description: `My Website Built In Gatsby.js`,
    author: `TheBotlyNoob`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-split-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                sh: 'bash',
                'sh-session': 'bash'
              },
              showLineNumbers: true,
              noInlineHighlight: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jj-website`,
        short_name: `jj`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/doge.jpg`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`${__dirname}/src/arc-sw.js`)
      }
    }
  ]
};
