const SCORE_ACTIONS = {
  ADD_CORRECT_ANSWER: 'ADD_CORRECT_ANSWER',
  ADD_INCORRECT_ANSWER: 'ADD_INCORRECT_ANSWER',
  RESET_ANSWERS: 'RESET_ANSWERS',
};

//
const addCorrectAnswer = (answer) => ({
  type: SCORE_ACTIONS.ADD_CORRECT_ANSWER,
  answer,
});

const addIncorrectAnswer = (answer) => ({
  type: SCORE_ACTIONS.ADD_INCORRECT_ANSWER,
  answer,
});

const resetAnswers = () => ({
  type: SCORE_ACTIONS.RESET_ANSWERS,
});

export {
  SCORE_ACTIONS, addCorrectAnswer, addIncorrectAnswer, resetAnswers,
};
