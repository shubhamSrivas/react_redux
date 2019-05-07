import React from 'react';
import {render} from 'react-dom';

// importing css
import css from './styles/style.styl';
//import components
import App from './components/app';
import Single from './components/single';
import Photogrid from './components/photogrid';
//import React router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
<Provider store = {store}>
  <Router history = {history}>
      <Route path = "/" component = {App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path = "/view/:postId" component = {Single}></Route>
      </Route>
  </Router>
  </Provider>
);
export default router;

render(router,
  document.getElementById("root"));