const SCORE_ACTIONS = {
  ADD_CORRECT_ANSWER: 'ADD_CORRECT_ANSWER',
  ADD_INCORRECT_ANSWER: 'ADD_INCORRECT_ANSWER',
  RESET_ANSWERS: 'RESET_ANSWERS',
};

// Add a correct answer to the correct answers list
// @param {Object} - answer. An answer or 'card' object
// @returns {Object} - an object to be supplied as an argument to the reducer.
const addCorrectAnswer = (answer) => ({
  type: SCORE_ACTIONS.ADD_CORRECT_ANSWER,
  answer,
});

// Add an incorrect answer to the incorrect answers list
// @param {Object} - answer. An answer or 'card' object
// @returns {Object} - an object to be supplied as an argument to the reducer.
const addIncorrectAnswer = (answer) => ({
  type: SCORE_ACTIONS.ADD_INCORRECT_ANSWER,
  answer,
});

// Reset the correct and incorrect answer lists to their default state
// @returns {Object} - an object to be supplied as an argument to the reducer.
const resetAnswers = () => ({
  type: SCORE_ACTIONS.RESET_ANSWERS,
});

export {
  SCORE_ACTIONS, addCorrectAnswer, addIncorrectAnswer, resetAnswers,
};
