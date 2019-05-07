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

export default store;
