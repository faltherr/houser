import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {Provider} from 'react-redux'
// import store from './ducks/store'
import { HashRouter } from 'react-router-dom'

// <Provider store ={store}>
// </Provider>

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));

// registerServiceWorker();
