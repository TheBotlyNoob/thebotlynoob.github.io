import React from "react";
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