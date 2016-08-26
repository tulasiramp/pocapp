
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Main, Home, Login} from './components';
ReactDOM.render(
  <div>
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
  </div>,
  document.getElementById('app-container')
);
