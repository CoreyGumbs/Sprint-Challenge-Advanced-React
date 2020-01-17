import React from 'react';
import { render } from '@testing-library/react'
import App from '../App';
import Header from '../components/Header/Header';
import Players from '../components/Players/Players';

test(' APP renders without crashing', () => {
   const {container, getByText} =  render(<App/>);
   getByText('APP');
});

test('Header component renders', () => {
   const {getByTestId} = render(<Header />);
   getByTestId(/header/i);
})

test('Player Component Renders', () =>{
   const {getByTestId} = render(<Players/>);

   getByTestId(/players/i);
})

