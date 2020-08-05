import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colorPrimary: '#d43f8d',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export { ThemeProvider, theme, GlobalStyle };
