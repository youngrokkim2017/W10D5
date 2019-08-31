import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { create } from 'domain';

const configureStore = (preloadedState={}) => {
    const store = createStore(rootReducer, preloadedState);
    return store;
}

export default configureStore;