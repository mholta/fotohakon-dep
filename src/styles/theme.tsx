import { createMuiTheme } from '@material-ui/core/styles'

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
    text: {},
  },
  typography: {
    allVariants: {},
    fontFamily: ['Source Sans Pro', 'sans-serif', 'Libre Baskerville'].join(
      ','
    ),
  },
  spacing: (factor) => `${0.25 * factor}rem`,
})

export default theme
