import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import GitHubPage from "./components/GitHub.jsx";
import YouTubePage from "./components/YouTube.jsx";
import NotFoundPage from "./components/404.jsx";
import ReactDOM from "react-dom";

ReactDOM.render (
  <Router basename={process.env.PUBLIC_URL}>
    <SetVars />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/GitHub" component={GitHubPage} />
        <Route path="/YouTube" component={YouTubePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
  </Router>,
  document.getElementById ("root")
);