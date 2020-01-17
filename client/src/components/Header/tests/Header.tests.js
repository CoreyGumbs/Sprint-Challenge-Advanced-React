import React from 'react';
import { render, getByText } from '@testing-library/react'
import Header from './Header';

test('Header component renders', () => {
    const {getByTestId} = render(<Header />);
    getByText(/header/i);
})