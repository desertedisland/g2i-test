/* eslint no-undef: 0 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Results from './index';

const mockStore = configureStore([]);

const testStore = {
  cards: {
    working: false,
    cards: [],
  },
  score: {
    correctAnswers: [{
      category: 'Hitchhikers guide to the galaxy',
      question: 'What is the meaning of life?',
      correct_answer: 'True',
    }],
    incorrectAnswers: [{
      category: 'Hitchhikers guide to the galaxy',
      question: 'Who is Ford Prefect?',
      correct_answer: 'True',
    }],
  },
};

const store = mockStore(testStore);

describe('Results page',
  () => {

    let testRenderer = null;

    beforeAll(
      () => {

        store.dispatch = jest.fn();
        testRenderer = renderer.create(<Provider store={store}><Results /></Provider>);

      },
    );

    test('Snapshot test:',
      () => {

        expect(testRenderer.toJSON()).toMatchSnapshot();

      });

    it('Should render the heading correctly',
      () => {

        const heading = testRenderer.root.findByProps({ 'data-test-id': 'quiz-results-heading' });
        expect(heading.props.children).toEqual(['You scored ', 1, ' / ', 2]);

      });

    it('Should render the answers correctly',
      () => {

        const answers = testRenderer.root.findByProps({ 'data-test-id': 'quiz-answers-display' });
        const answer1 = answers.props.children[0].props;
        const answer2 = answers.props.children[1].props;

        expect(answer1.className).toEqual('correct');
        expect(answer1.children).toEqual('What is the meaning of life?');

        expect(answer2.className).toEqual('incorrect');
        expect(answer2.children).toEqual('Who is Ford Prefect?');

      });

  });
