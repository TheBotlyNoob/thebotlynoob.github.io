import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

/**
 * Import all page components here
 */
import MainPage from './components/MainPage';
import GitHubPage from './components/GitHub';
import YouTubePage from './components/YouTube';
import NotFoundPage from './components/404';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function Routes () {
  return (
  <BrowserRouter>
      <Switch>
          <Route exact path="/"><MainPage /></Route>
          <Route path="/YouTube"><YouTubePage /></Route>
          <Route path="/GitHub"><GitHubPage /></Route>
          <Route path="*"><NotFoundPage /></Route>
      </Switch>
      <footer>
          This Page Is Open Source On GitHub! <Link to="https://github.com/TheBotlyNoob/TheBotlyNoob.github.io"><code>Check It Out!</code></Link>
      </footer>
  </BrowserRouter>
  
);
}