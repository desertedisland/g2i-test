/* eslint react/jsx-one-expression-per-line: 0 */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetCards } from '../../state/cards/cardsActions';
import { resetAnswers } from '../../state/score/scoreActions';

import { HeaderH1, AlignedPage, StyledLink } from '../../styles/components';
import { AnswerDisplay } from './styles';

import { htmlDecode } from '../../lib/misc'; // Decode HTML entities

// Create a unique key for each card by taking the first 10 characters of the
// question + answer, removing whitespace, transforming to lowercase and concatenating the results.
const getKey = (question, answer) => `${question.split('').slice(0, 10).join('')
  .replace(/\s/g, '')
  .toLowerCase()}
    -
    ${answer.split('').slice(0, 10).join('')
    .replace(/\s/g, '')
    .toLowerCase()}`;

export default function Results() {

  const history = useHistory();
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  useEffect(
    () => {

      // If no questions have been answered then return to the home page.
      if (!score.correctAnswers.length && !score.incorrectAnswers.length) {

        return history.push('/');

      }

      // Reset the quiz on leaving this page.
      return () => {

        dispatch(resetCards());
        dispatch(resetAnswers());

      };

    }, [],
  );

  // Combine both correct and incorrect answers into on array so that they can be displayed with the result
  // and correct answer. getKey() supplies a unique key to each item.
  const results = [
    ...score.correctAnswers.map(
      (answer) => ({ ...answer, iscorrect: true, key: getKey(answer.question, answer.correct_answer) }),
    ),
    ...score.incorrectAnswers.map(
      (answer) => ({ ...answer, iscorrect: false, key: getKey(answer.question, answer.correct_answer) }),
    ),
  ];

  return (
    <AlignedPage>

      <HeaderH1 data-test-id="quiz-results-heading">
        You scored {score.correctAnswers.length} / { score.correctAnswers.length + score.incorrectAnswers.length }
      </HeaderH1>

      <AnswerDisplay data-test-id="quiz-answers-display">

        {
          results.map(
            (answer) => (
              <li key={answer.key} className={answer.iscorrect ? 'correct' : 'incorrect'}>
                { htmlDecode(answer.question) }
              </li>
            ),
          )
        }

      </AnswerDisplay>

      <StyledLink to="/">Play again?</StyledLink>

    </AlignedPage>
  );

}
