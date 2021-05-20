import React from 'react';
import './css/bootstrap.css';
import './css/index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MainPage, NotFoundPage } from './pages';
import ReactDOM from 'react-dom';

ReactDOM.render (
    <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
    </Router>,
  document.querySelector ('#root')
);
