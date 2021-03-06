import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Body from "./components/Body"
import Forms from './components/Forms/Forms'
import FormSelect from './components/Forms/FormSelect'

import formsReducer from "./components/Forms/reducer"

import { config } from './locales/config'
import { terms } from "./locales/copy"
import { titleize } from "./locales/functions"
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(
  combineReducers({
    forms: formsReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header className="App-header">
            <h1>{titleize(terms.appName)}</h1>
              <Switch>
                <Route exact path={config.paths.root} component={Body} />
                <Route exact path={config.paths.formSelect} component={FormSelect} />
                <Route path={config.paths.eventFormPath} component={Forms} />
              </Switch>
          </header>
        </Router>
      </Provider>
    </div>
  );
}
