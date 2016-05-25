import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import Foosball from './foosball.jsx';
import Stats from './stats.jsx';
import Authentication from './authentication.js';


if (Authentication.getIdToken()) {
  render((
    <Router history={hashHistory} >
      <Route path="/" component={App} >
        <IndexRoute component={Foosball} />
        <Route path="stats" component={Stats} />
        <Route path="foosball" component={Foosball} />
        <Route path="access_token=*" component={Foosball} />
      </Route>
    </Router>
  ), document.body);
} else {
  Authentication.showLogin();
}
