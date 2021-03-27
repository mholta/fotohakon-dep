import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { StylesProvider } from '@material-ui/core'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-weight: 400;
    height: 100%;
  }
  
  h1,h2,h3,h4,h5,h6{
  }
`

export const wrapRootElement = ({ element }) => (
  <StylesProvider injectFirst>
    <GlobalStyles />
    {element}
  </StylesProvider>
)
