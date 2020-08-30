import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

test('Register render', () => {
  const { asFragment } = render(
    <Router>
      <Register />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
