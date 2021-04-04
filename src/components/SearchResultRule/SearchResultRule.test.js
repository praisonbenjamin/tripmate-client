import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultRule from './SearchResultRule';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResultRule />, div);
    ReactDOM.unmountComponentAtNode(div);
});