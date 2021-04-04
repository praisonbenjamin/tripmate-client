import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TripsBurgerMenu from './TripsBurgerMenu';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <TripsBurgerMenu />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});