
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByLabelText, getByText } = render(<Login />);
  const usernameInput = getByLabelText('Username');
  const passwordInput = getByLabelText('Password');
  const loginButton = getByText('Login');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test('successful login redirects to home', () => {

});

test('invalid credentials display error message', () => {

});
