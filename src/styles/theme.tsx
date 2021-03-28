import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    team1: Palette['primary']
    team2: Palette['primary']
    team3: Palette['primary']
    team4: Palette['primary']
    team5: Palette['primary']
    team6: Palette['primary']
    background1: Palette['primary']
    background2: Palette['primary']
    gold: Palette['primary']
    silver: Palette['primary']
    bronze: Palette['primary']
  }
  interface PaletteOptions {
    team1: PaletteOptions['primary']
    team2: PaletteOptions['primary']
    team3: PaletteOptions['primary']
    team4: PaletteOptions['primary']
    team5: PaletteOptions['primary']
    team6: PaletteOptions['primary']
    background1: PaletteOptions['primary']
    background2: PaletteOptions['primary']
    gold: PaletteOptions['primary']
    silver: PaletteOptions['primary']
    bronze: PaletteOptions['primary']
  }
}
// Theme component for Material UI
// This is just overrides, the full theme object contains
// more styles

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#21466E',
    },
    secondary: {
      main: '#E69C34',
    },
    team1: {
      main: '#C74847',
    },
    team2: {
      main: '#4B9891',
    },
    team3: {
      main: '#F69551',
    },
    team4: {
      main: '#164248',
    },
    team5: {
      main: '#AD7E4C',
    },
    team6: {
      main: '#FA9665',
    },
    background1: {
      main: '#f8edf2',
      dark: '#e6c9d6',
    },
    background2: {
      main: '#5f95d6',
    },
    gold: {
      main: '#fcc201',
    },
    silver: {
      main: '#C0C0C0',
    },
    bronze: {
      main: '#a97142',
    },
    text: {
      primary: '#fef2f2',
      secondary: 'lightgrey',
    },
  },
  typography: {
    allVariants: {
      color: '#fef2f2',
    },
    fontFamily: ['Source Sans Pro'].join(','),
  },
  spacing: (factor) => `${0.25 * factor}rem`,
})

export default theme
