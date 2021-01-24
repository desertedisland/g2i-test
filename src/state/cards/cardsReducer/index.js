import { CARD_ACTIONS } from '../cardsActions';

const initState = {
  cards: [],
  working: false,
  commsError: '',
};

export default function cardsReducer(state = initState, action) {

  switch (action.type) {

    case CARD_ACTIONS.ADD_CARDS:
      return { ...state, cards: action.cards };

    case CARD_ACTIONS.RESET_CARDS:
      return { ...state, cards: [] };

    case CARD_ACTIONS.WORKING:
      return { ...state, working: action.working };

    case CARD_ACTIONS.COMMS_ERROR:
      return { ...state, commsError: action.error };

    default:
      return state;

  }

}
