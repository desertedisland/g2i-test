import React from 'react';
import {
  AlignedPage, HeaderH1, CenteredBlurb, StyledLink,
} from '../../styles/components';

export default function Home() {

  return (
    <AlignedPage>
      <HeaderH1>Welcome to the Trivia Challenge!</HeaderH1>

      <CenteredBlurb>
        You will be presented with 10 True or False questions.
      </CenteredBlurb>

      <CenteredBlurb>
        Can you score 100%?
      </CenteredBlurb>

      <StyledLink to="/quiz">Begin</StyledLink>

    </AlignedPage>
  );

}
