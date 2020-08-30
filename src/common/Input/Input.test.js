import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

test('Input render correctly', () => {
  const onChangeMock = jest.fn();
  const { asFragment } = render(<Input name="input" id="input" label="label" value="value" onChange={onChangeMock} />);

  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByRole('textbox')).toHaveValue('value');

  userEvent.type(screen.getByRole('textbox'), '123');
  expect(onChangeMock).toBeCalledTimes(3);
});

test('Input handle password', () => {
  render(<Input type="password" id="input" label="label" value="value" />);

  expect(screen.getByLabelText('label')).toHaveAttribute('type', 'password');

  userEvent.click(screen.getByRole('button'));
  expect(screen.getByLabelText('label')).toHaveAttribute('type', 'text');
});

test('Input handle error', () => {
  const errorMessage = 'error message';
  render(<Input id="input" label="label" value="value" showError errorMessage={errorMessage} />);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
