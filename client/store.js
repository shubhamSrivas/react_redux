import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for default state

const defaultState = {
  posts, comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore( browserHistory , store);

//this we are doing to solve the problem of hot reloading
if(module.hot){
  module.hot.accept('./reducers/index', ()=>{
    const nextRoorReducer = require('./reducers/index').default;
    store.replaceReducer(nextRoorReducer);
  });

}

export default store;
