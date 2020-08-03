import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { ThemeProvider, theme, GlobalStyle } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
