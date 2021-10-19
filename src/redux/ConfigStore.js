import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './CountriesReducer.js';

const reducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;