// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import {initialiseStore} from './redux/Store';
import App from './containers/App';

initialiseStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
    <App />,
    appRoot
);
