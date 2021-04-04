import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import TripPlansPage from './TripPlansPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Route path={`/Rules/1`} component={TripPlansPage} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});