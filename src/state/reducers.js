import { combineReducers } from 'redux';
import index from './cards/cardsReducer';
import index from './score/scoreReducer';

const cardsApp = combineReducers(
  {
    cards: index,
    score: index,
  },
);

export default cardsApp;
