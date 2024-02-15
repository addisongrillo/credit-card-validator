import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CreditCardValidator from './CreditCardValidator';

type TestElement = Document | Element | Window | Node

const hasInputValue = (e: TestElement, inputValue: string) => {
    return screen.getByDisplayValue(inputValue) === e
  }

test('Renders Credit Card Validator with Title and Button', () => {
    render(<CreditCardValidator />);
    expect(screen.getByText(/Credit Card Validator/i)).toBeInTheDocument();
    expect(screen.getByText(/VALIDATE/i)).toBeInTheDocument();
});

test('Input Works', () => {
    render(<CreditCardValidator />);
    const input = screen.getByLabelText(/Credit Card Number/i)
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '123' } })
    expect(hasInputValue(input, "123")).toBe(true)
});