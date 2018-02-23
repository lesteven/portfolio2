import React, {Component} from 'react';
import { hydrate } from 'react-dom';
import App from '../common/App.jsx';
import { Provider } from 'react-redux';
import configureStore from '../common/configureStore.js';



// data from server in preloaded state will be passed to store
const preloadedState = window.__PRELOADED_STATE__;

// garbage collect data
delete window.__PRELOADED_STATE__;


const store = configureStore(preloadedState);



hydrate(
    <Provider store = {store}>    
        <App />
    </Provider>, 
    document.getElementById('root')
)
