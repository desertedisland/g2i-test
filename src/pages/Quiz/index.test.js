/* eslint no-undef: 0 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addCorrectAnswer, addIncorrectAnswer } from '../../state/score/scoreActions';
import Quiz from './index';

const mockStore = configureStore([]);

const testStore = {
  cards: {
    working: false,
    cards: [
      {
        category: 'Hitchhikers guide to the galaxy',
        question: 'what is the meaning of life?',
        correct_answer: 'True',
      },
      {
        category: 'Hitchhikers guide to the galaxy',
        question: 'what is the meaning of life?',
        correct_answer: 'True',
      },
    ],
  },
  score: {
    correctAnswers: [],
    incorrectAnswers: [],
  },
};

const store = mockStore(testStore);

describe('Quiz page',
  () => {

    let testRenderer = null;

    beforeAll(
      () => {

        store.dispatch = jest.fn();
        testRenderer = renderer.create(<Provider store={store}><Quiz /></Provider>);

      },
    );

    test('Snapshot test:',
      () => {

        expect(testRenderer.toJSON()).toMatchSnapshot();

      });

    it('Should render the heading correctly',
      () => {

        const heading = testRenderer.root.findByProps({ 'data-test-id': 'quiz-heading' });
        expect(heading.props.children).toEqual('Hitchhikers guide to the galaxy');

      });

    it('Should handle true button click correctly',
      () => {

        renderer.act(
          () => {

            testRenderer.root.findByProps({ 'data-test-id': 'submit-answer-true' }).props.onClick();

          },
        );

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
          addCorrectAnswer(testStore.cards.cards[0]),
        );

      });

    it('Should handle false button click correctly',
      () => {

        renderer.act(
          () => {

            testRenderer.root.findByProps({ 'data-test-id': 'submit-answer-false' }).props.onClick();

          },
        );

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toHaveBeenCalledWith(
          addIncorrectAnswer(testStore.cards.cards[1]),
        );

      });

  });
