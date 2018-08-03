import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {Provider} from 'react-redux'
// import store from './ducks/store'
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import Store from './ducks/store'

// <Provider store ={store}>
// </Provider>

ReactDOM.render(
    <Provider store ={Store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));

// registerServiceWorker();
