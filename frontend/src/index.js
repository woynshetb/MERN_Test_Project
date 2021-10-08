import React from 'react';
import ReactDOM from 'react-dom';

// to initialize redux we need to import provider from redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers';

import App from './App'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
<Provider store={store} ><App /></Provider>
, document.getElementById('root'));