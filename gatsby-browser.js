import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core'
import theme from './src/styles/theme'

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

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
