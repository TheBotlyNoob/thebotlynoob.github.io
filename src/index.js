import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MainPage, NotFoundPage } from './pages';
import ReactDOM from 'react-dom';

ReactDOM.render (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
    </Router>,
  document.querySelector ('#root')
);
