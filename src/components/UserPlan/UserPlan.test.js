import React from 'react';
import ReactDOM from 'react-dom';
import UserPlan from './UserPlan';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserPlan />, div);
    ReactDOM.unmountComponentAtNode(div);
});