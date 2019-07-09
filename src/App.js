import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"

import Body from "./components/Body"

import problemsReducer from "./reducers/problems"

import logo from './logo.svg';
import './App.css';

const store = createStore(
  combineReducers({
    problems: problemsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <h1>Scarlett's Math Quiz</h1>
          <Body />
        </header>
      </Provider>
    </div>
  );
}
