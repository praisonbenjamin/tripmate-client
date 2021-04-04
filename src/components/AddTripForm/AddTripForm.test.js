import React from 'react';
import ReactDOM from 'react-dom';
import AddTripForm from './AddTripForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTripForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});