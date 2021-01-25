import React from 'react';
import {
  AlignedPage, CenteredBlurb, HeaderH1, StyledLink,
} from '../../styles/components';

export default function NotFound() {

  return (
    <AlignedPage>

      <HeaderH1>Page Not Found</HeaderH1>

      <CenteredBlurb>
        Sorry but this page was not found.
      </CenteredBlurb>

      <StyledLink to="/">Return home</StyledLink>

    </AlignedPage>
  );

}
