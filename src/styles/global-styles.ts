import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    //height: 100%;
    width: 100vw;
    overflow-x: hidden;
    background-color: #e8eaf6;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  #root {
    //min-height: 100%;
    //min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
    margin: 0;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`
