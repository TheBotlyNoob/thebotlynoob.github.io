import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";
import GitHubPage from "./components/GitHub";
import YouTubePage from "./components/YouTube";
import NotFoundPage from "./components/404";
import ReactDOM from "react-dom";

ReactDOM.render (
  <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/GitHub" component={GitHubPage} />
        <Route path="/YouTube" component={YouTubePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
  </Router>,
  document.getElementById ("root")
);