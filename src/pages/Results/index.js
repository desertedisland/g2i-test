/* eslint react/jsx-one-expression-per-line: 0 */

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderH1, AlignedPage, StyledLink } from '../../styles/components';
import { AnswerDisplay } from './styles';

import { htmlDecode } from '../../lib/misc'; // Decode HTML entities

export default function Results() {

  const history = useHistory();
  const score = useSelector((state) => state.score);

  useEffect(
    () => {

      // If no questions have been answered then return to the home page.
      if (!score.correctAnswers.length && !score.incorrectAnswers.length) {

        return history.push('/');

      }

    }, [],
  );

  // Create a unique key for each card by taking the first 10 characters of the
  // question, removing whitespace and transforming it to lowercase.
  const getKey = (question) => question.split('').slice(0, 10).join('')
    .replace(/\s/g, '')
    .toLowerCase();

  // Combine both correct and incorrect answers so that they can be displayed with the result
  // and correct answer.
  const results = [
    ...score.correctAnswers.map((answer) => ({ ...answer, iscorrect: true, key: getKey(answer.question) })),
    ...score.incorrectAnswers.map((answer) => ({ ...answer, iscorrect: false, key: getKey(answer.question) })),
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
