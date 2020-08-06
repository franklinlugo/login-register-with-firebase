import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  primary: '#d43f8d',
  secondary: '#0250c5',
  gray: '#999',
  white: '#fff',
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export { ThemeProvider, theme, GlobalStyle };
