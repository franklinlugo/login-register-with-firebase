import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { ThemeProvider, theme, GlobalStyle } from './theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('app'),
);
