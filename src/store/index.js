import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import prediction from '../reducers/prediction';

const store = createStore(
  combineReducers({
    prediction
  }),
  applyMiddleware(thunk)
)

export default store;
