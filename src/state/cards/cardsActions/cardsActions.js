import axios from 'axios';
import { API_URL } from '../../../../GLOBALS';

const CARD_ACTIONS = {
  ADD_CARDS: 'ADD_CARDS',
  RESET_CARDS: 'RESET_CARDS',
  WORKING: 'WORKING', // API query in progress
  COMMS_ERROR: 'COMMS_ERROR',
};

// Update the cards store when an HTTP request starts and finishes
// @param {boolean} - true when the request is in process
// @returns {Object} - POJO to be sent as argument to the reducer
const setWorking = (working = false) => ({
  type: CARD_ACTIONS.WORKING,
  working,
});

// Update the cards store when a network error is encountered
// @param {String} - The error message
// @returns {Object} - POJO to be sent as argument to the reducer
const setCommsError = (error = '') => ({
  type: CARD_ACTIONS.COMMS_ERROR,
  error,
});

// Replaces a list of cards in the cards store with a new one
// @param {Array} - the list of new cards
// @returns {Object} - POJO to be sent as argument to the reducer
const addCards = (cards = []) => ({
  type: CARD_ACTIONS.ADD_CARDS,
  cards,
});

// Resets the cards list in the cards store to its default (empty list) state
// @returns {Object} - POJO to be sent as argument to the reducer
const resetCards = () => ({
  type: CARD_ACTIONS.RESET_CARDS,
});

// Makes a GET request to the API and updates the cards store with the retrieved cards via the
// addCards() action. Calls setWorking() and setCommsError() as appropriate.
// @param {Object} filters
// @param {number} [filters.amount = 10] - Number of results to return
// @param {string} [filters.difficulty = 'hard'] - Difficulty of questions to return
// @param {string} [filters.type = 'boolean'] - Answer format of questions to return, e.g. true / false is 'boolean'
// @returns {Promise}
const defaultFilters = { amount: 10, difficulty: 'hard', type: 'boolean' };

const getCardsRequest = (filters = defaultFilters) => (dispatch) => {

  dispatch(setWorking(true));

  return axios.get(API_URL, { params: filters }).then(
    ({ data }) => {

      dispatch(setWorking());
      dispatch(addCards(data.results));

    },
  ).catch(
    (err) => {

      dispatch(setWorking());
      dispatch(setCommsError(`Network error: ${err.message}`));

      setTimeout(
        () => {

          dispatch(setCommsError());

        }, 3000,
      );

    },
  );

};

export {
  CARD_ACTIONS, getCardsRequest, addCards, resetCards,
};
