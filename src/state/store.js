import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import cardsApp from './reducers';

const cardsStore = createStore(
  cardsApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default cardsStore;
