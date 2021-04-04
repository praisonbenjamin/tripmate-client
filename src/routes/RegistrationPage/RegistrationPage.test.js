import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <RegistrationPage />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});