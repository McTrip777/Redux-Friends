import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import friendsReducer from "./Reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';


const store = createStore(
    friendsReducer,
    applyMiddleware(thunk, logger)
  );


ReactDOM.render( 
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
document.getElementById('root'));


