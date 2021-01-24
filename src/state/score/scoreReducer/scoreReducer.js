import { SCORE_ACTIONS } from '../scoreActions/scoreActions';

const initState = {
  correctAnswers: [],
  incorrectAnswers: [],
};

const scoreReducer = (state = initState, action) => {

  switch (action.type) {

    case SCORE_ACTIONS.ADD_CORRECT_ANSWER:
      return {
        ...state,
        correctAnswers: [...state.correctAnswers, action.answer],
      };

    case SCORE_ACTIONS.ADD_INCORRECT_ANSWER:
      return {
        ...state,
        incorrectAnswers: [...state.incorrectAnswers, action.answer],
      };

    case SCORE_ACTIONS.RESET_ANSWERS:
      return initState;

    default: return state;

  }

};

export default scoreReducer;
