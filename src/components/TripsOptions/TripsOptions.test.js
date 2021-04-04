import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TripsOptions from './TripsOptions';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
        <TripsOptions />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});