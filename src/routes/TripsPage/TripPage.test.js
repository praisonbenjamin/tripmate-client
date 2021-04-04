import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import TripsPage from './TripsPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <TripsPage />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});