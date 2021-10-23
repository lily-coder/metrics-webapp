import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './CountriesReducer';

const reducer = (state, action) => combineReducers({
  data: countryReducer,
})(action.type === 'LOGOUT' ? undefined : state,
  action);

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;