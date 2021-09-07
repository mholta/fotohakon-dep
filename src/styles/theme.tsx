import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    color1: Palette['primary']
    color2: Palette['primary']
    color3: Palette['primary']
    color4: Palette['primary']
  }

  interface PaletteOptions {
    color1: PaletteOptions['primary']
    color2: PaletteOptions['primary']
    color3: PaletteOptions['primary']
    color4: PaletteOptions['primary']
  }
}
// Theme component for Material UI
// This is just overrides, the full theme object contains
// more styles

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#271401',
    },
    secondary: {
      main: '#eae8d7',
      dark: '#beb09f',
    },
    color1: {
      main: '#A76D4F',
    },
    color2: {
      main: '#7C9A80',
    },
    color3: {
      main: '#AF8558',
    },
    color4: {
      main: '#AF8558',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    allVariants: {},
    fontFamily: ['Libre Baskerville', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1280,
      xl: 1920,
    },
  },
  /* spacing: (factor) => `${0.25 * factor}rem`, */
})

export default theme
