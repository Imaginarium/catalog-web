import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100vw;
    overflow-x: hidden;
    background-color: #e8eaf6;
  }

  body {
    font-family: 'Poppins', sans-serif;
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
