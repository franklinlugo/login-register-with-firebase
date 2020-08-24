import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button render correctly', () => {
  const { asFragment } = render(<Button>button</Button>);
  expect(asFragment()).toMatchSnapshot();
});

test('Button handle type', () => {
  const { asFragment } = render(<Button type="submit">button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
