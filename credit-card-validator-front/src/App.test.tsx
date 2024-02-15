import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Credit Card Validator', () => {
  render(<App />);
  expect(screen.getByText(/Credit Card Validator/i)).toBeInTheDocument();
});