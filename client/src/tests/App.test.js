import React from 'react';
import { render } from '@testing-library/react'
import App from '../App';
import Header from '../components/Header/';

test(' APP renders without crashing', () => {
   const {container, getByText} =  render(<App/>);
   getByText('APP');
});

// test('Header component renders', () => {
//    const {container, getByText} = render(<Header />);
//    getByText('Header');
// })

