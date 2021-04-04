import React from 'react';
import ReactDOM from 'react-dom';
import AddPlanForm from './AddPlanForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPlanForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});