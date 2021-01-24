import { combineReducers } from 'redux';
import cards from './cards/cardsReducer';
import score from './score/scoreReducer/scoreReducer';

const cardsApp = combineReducers(
  {
    cards,
    score,
  },
);

export default cardsApp;
