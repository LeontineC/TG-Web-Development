import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WeatherDetail from './components/WeatherDetail'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Router>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/WeatherDetail" component={WeatherDetail} />
  </Switch>
  </Router>,
  rootElement
);

// ReactDOM.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  // document.getElementById('root')
// );


