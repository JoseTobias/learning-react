import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';

const reducers = combineReducers({
    field: () => ({ value: 'Opa'})
})

ReactDOM.render(<App />, document.getElementById('root'));
