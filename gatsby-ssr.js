import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './src/styles/theme'
import { Helmet } from 'react-helmet'
import Kjeks from './src/components/cookie'

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Kjeks />
  </>
)
