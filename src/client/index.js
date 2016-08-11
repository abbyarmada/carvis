import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Splash from './splash-components/Splash';
import MainLayout from './layout-components/MainLayout';
import NoMatch from './layout-components/NoMatch';
import UserDashboard from './profile-components/UserDashboard';
import Order from './order-components/Order';
import UberAuth from './auth-components/UberAuth/UberAuth';
import LyftAuth from './auth-components/LyftAuth/LyftAuth';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

requireAll(require.context('./static/', true, /^\.\/.*/));
function requireAll(r) { r.keys().forEach(r); }

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Splash}></IndexRoute>
      <Route path="app" component={App}>
        <Route path="lyftAuth" component={LyftAuth}></Route>
        <Route path="uberAuth" component={UberAuth}></Route>
        <Route path=":userid/dashboard" component={UserDashboard}></Route>
        <Route path=":userid/order" component={Order}></Route>
      </Route>
    </Route>
    <Route path="*" component={NoMatch}></Route>
  </Router>
, document.getElementById('app'));
