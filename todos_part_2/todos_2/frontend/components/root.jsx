import React from 'react';
import App from './app.jsx.js';

const Root = ({ store }) => {
    <Provider store={store}>
        <App />
    </Provider>
};

export default Root;