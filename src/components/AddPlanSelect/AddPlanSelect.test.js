import React from 'react';
import ReactDOM from 'react-dom';
import AddPlanSelect from './AddPlanSelect';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPlanSelect />, div);
    ReactDOM.unmountComponentAtNode(div);
});