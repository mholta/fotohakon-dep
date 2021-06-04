import { createMuiTheme } from '@material-ui/core/styles'

/* 
declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
    tertiary: Palette['primary'];
    team1: Palette['primary'];
    team2: Palette['primary'];
    team3: Palette['primary'];
    team4: Palette['primary'];
    team5: Palette['primary'];
    team6: Palette['primary'];
    background1: Palette['primary'];
    background2: Palette['primary'];
    gold: Palette['primary'];
    silver: Palette['primary'];
    bronze: Palette['primary'];
    text: TypeText;
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    team1: PaletteOptions['primary'];
    team2: PaletteOptions['primary'];
    team3: PaletteOptions['primary'];
    team4: PaletteOptions['primary'];
    team5: PaletteOptions['primary'];
    team6: PaletteOptions['primary'];
    background1: PaletteOptions['primary'];
    background2: PaletteOptions['primary'];
    gold: PaletteOptions['primary'];
    silver: PaletteOptions['primary'];
    bronze: PaletteOptions['primary'];
  }
} */
// Theme component for Material UI
// This is just overrides, the full theme object contains
// more styles

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#21466E',
    },
    secondary: {
      main: '#EAE2D9',
      light: 'rgba(234, 226, 217, 0.6)',
    },
    text: {},
  },
  typography: {
    allVariants: {},
    fontFamily: ['Source Sans Pro', 'sans-serif', 'Libre Baskerville'].join(
      ','
    ),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 680,
      lg: 1280,
      xl: 1920,
    },
  },
  /* spacing: (factor) => `${0.25 * factor}rem`, */
})

export default theme
