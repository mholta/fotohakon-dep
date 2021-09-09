import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

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
