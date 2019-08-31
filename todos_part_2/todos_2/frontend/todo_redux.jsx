import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector(".root");
    const store = configureStore();

    window.store = store;

    ReactDOM.render(<Root store={store} />, root);
    // ReactDOM.render(<App />, rootElement);
});