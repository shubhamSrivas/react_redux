import React from 'react';
import {render} from 'react-dom';

// importing css
import css from './styles/style.styl';

//import components
import App from './components/app';
import Single from './components/single';
import Photogrid from './components/photogrid';

//import React router dependencies
import {Link, Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

//importing integration with sentry
import Raven from "raven-js";
import {sentry_url} from "./data/config";

Raven.config(sentry_url).install();

const router = (
<Provider store = {store}>
  <Router history = {history}>
      <Route path = "/" component = {App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Link path = "/view/:postId" component = {Single}></Link>
      </Route>
  </Router>
  </Provider>
);
export default router;

render(router,
  document.getElementById("root"));