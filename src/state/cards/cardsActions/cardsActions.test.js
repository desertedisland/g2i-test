/* eslint no-undef: 0 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getCardsRequest,
} from './index';

// Mock the redux store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

const TEST_API_URL = 'https://opentdb.com/api.php';
const testAPIResult = {
  response_code: 0,
  results: [
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Unturned originally started as a Roblox game.',
      correct_answer: 'True',
      incorrect_answers: [
        'False',
      ],
    },
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      question: 'The Kingdom of Prussia briefly held land in Estonia.',
      correct_answer: 'False',
      incorrect_answers: [
        'True',
      ],
    },
  ],
};

let store = null;

describe('cardsActions',
  () => {

    beforeAll(
      () => {

        // Mock response from server
        mock.onGet(TEST_API_URL).reply(200, testAPIResult);

      },
    );

    beforeEach(
      () => {

        store = mockStore([]);

      },
    );

    it('Should retrieve a list of cards from the API and populate the cards store with the result',
      () => {

        store.dispatch(getCardsRequest()).then(
          () => {

            const expectedActions = store.getActions();

            expect(expectedActions.length).toEqual(3);
            expect(expectedActions[0]).toMatchObject({ type: 'WORKING', working: true });
            expect(expectedActions[1]).toMatchObject({ type: 'WORKING', working: false });
            expect(expectedActions[2].cards).toMatchObject(testAPIResult.results);

          },
        );

      });

  });
