import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Admin from "./components/Admin"
import Body from "./components/Body"

import problemsReducer from "./reducers/problems"
import memesReducer from "./reducers/memes"

import logo from './logo.svg';
import './App.css';

const store = createStore(
  combineReducers({
    problems: problemsReducer,
    memes: memesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header className="App-header">
            <h1>Scarlett's Math Quiz</h1>
            <Switch>
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/" component={Body} />
            </Switch>
          </header>
        </Router>
      </Provider>
    </div>
  );
}
