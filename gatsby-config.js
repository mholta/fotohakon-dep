require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'fotohakon',
    description: `Web page for Hakon`,
    author: `@mholta`,
    siteUrl: `https://fotohakondev.netlify.app`,
  },
  plugins: [
    'gatsby-plugin-mdx',

    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        /*  webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Source Sans Pro`,
                variants: [`300`, `400`, `600`],
              },
              {
                family: `Libre Baskerville`,
                variants: [`400`, `700`],
              },
            ],
          },
        }, */
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
