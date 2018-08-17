import { createStore, compose, combineReducers } from 'redux';
import createdReducers from './reducers';

const middlewares = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const reducers = combineReducers({
  ...createdReducers,
});

const store = createStore(reducers, middlewares);

export default store;
