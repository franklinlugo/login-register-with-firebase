import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

test('Login render', () => {
  const { asFragment } = render(
    <Router>
      <Login />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
