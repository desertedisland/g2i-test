import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCardsRequest } from '../../state/cards/cardsActions';
import { addCorrectAnswer, addIncorrectAnswer } from '../../state/score/scoreActions';
import { AlignedPage, HeaderH1, StyledButton } from '../../styles/components';
import { QuizQuestion, ButtonContainer } from './styles';

export default function Quiz() {

  const cards = useSelector((state) => state.cards.cards);
  const working = useSelector((state) => state.cards.working);
  const [cardIndex, setCardIndex] = useState(0);
  let currentCard = cards[cardIndex];
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(
    () => {

      currentCard = cards[cardIndex];

      if (!cards.length) {

        dispatch(getCardsRequest());

      }

    }, [cards, cardIndex],
  );

  const submitAnswer = (answer) => {

    if (answer.toLowerCase() === currentCard.correct_answer.toLowerCase()) {

      dispatch(addCorrectAnswer(currentCard));

    } else {

      dispatch(addIncorrectAnswer(currentCard));

    }

    if (cardIndex < cards.length - 1) {

      setCardIndex(cardIndex + 1);

    } else {

      // go to the results page if all questions have been answered.
      // eslint-disable-next-line no-unused-expressions
      history && history.push('/results');

    }

  };

  if (working || !currentCard) {

    return <AlignedPage>Please wait...</AlignedPage>;

  }

  return (
    <AlignedPage>

      <HeaderH1 data-test-id="quiz-heading">{currentCard.category}</HeaderH1>

      <QuizQuestion className="quiz-question">
        {currentCard.question}
      </QuizQuestion>

      <ButtonContainer>
        <StyledButton data-test-id="submit-answer-true" onClick={(ev) => submitAnswer('True')}>true</StyledButton>
        <StyledButton data-test-id="submit-answer-false" onClick={(ev) => submitAnswer('False')}>false</StyledButton>
      </ButtonContainer>

    </AlignedPage>
  );

}
