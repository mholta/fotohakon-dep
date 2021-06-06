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
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env['GOOGLE_ANALYTICS_TRACKING_ID'], // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-consent-given',
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: process.env['GOOGLE_TAG_MANAGER_TRACKING_ID'], // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-consent-given',
          dataLayerName: 'dataLayer', // default
        },
        /* facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        }, */
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production'],
      },
    },
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
    `gatsby-plugin-fontawesome-css`,

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
