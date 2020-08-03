import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export { ThemeProvider, theme, GlobalStyle };
