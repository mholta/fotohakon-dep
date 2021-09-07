import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './src/styles/theme'
import { Helmet } from 'react-helmet'
import Kjeks from './src/components/cookie'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-weight: 400;
    height: 100%;
    font-size: 18px;
    padding: 0;
  }
  
  body {
    font-family: 'Libre Baskerville', serif;
/*     background-color: #eae8d7;
 */  }

  h1,h2,h3,h4,h5,h6{
     font-family: 'Libre Baskerville', serif;
/*     
 */
  }
  
  h1{font-size: 3.75}
  h3{
    font-size: 1.4rem;
    }
    `

const Viewport = ({ children }) => {
  return (
    <Helmet>
      {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      {children}
    </Helmet>
  )
}

export const wrapRootElement = ({ element }) => (
  <>
    Hello SSR
    {element}
  </>
)
