require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'Håkon Mjøs',
    titleTemplate: '%s · FotoHakon',
    description: `Håkon Mjøs, fotograf basert i Bergen, og brenner for å forevige de gode, gylne øyeblikkene - enten det er fotografering av bryllup, familie, forlovelse, konfirmasjon eller par.`,
    siteUrl: 'https://www.fotohakon.no', // No trailing slash allowed!
    image: '/seo.jpg', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env['GOOGLE_ANALYTICS_TRACKING_ID'], // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: process.env['GOOGLE_TAG_MANAGER_TRACKING_ID'], // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        /* facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        }, */
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-top-layout',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        /* webFontsConfig: {
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',

    'gatsby-plugin-image',

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
