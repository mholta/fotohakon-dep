import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './src/styles/theme'
import { Helmet } from 'react-helmet'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-weight: 400;
    height: 100%;
    font-size: 16px;
  }
  
  body {
    font-family:'Source Sans Pro', sans-serif;
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Libre Baskerville', serif;    font-weight: 400;
  }
  h1{font-size: 3.75}
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
  <ThemeProvider theme={theme}>
    <Viewport />
    <CssBaseline />
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
