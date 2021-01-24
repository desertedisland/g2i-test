import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import variables from './variables';

export const HeaderH1 = styled.h1`
  color: white;    
  text-align: center;
`;

export const AlignedPage = styled.div`

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: space-evenly;
  
  animation: fadein 2s;
  
`;

export const CenteredBlurb = styled.p`
  text-align: center;
`;

export const buttonStyle = css`
  background: ${variables.primaryColor};
  border: 1px solid ${variables.primaryColor};
  color: white;
  border-radius: 5px;
  font-size: 1.6em;
  padding: 8px 20px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  ${buttonStyle}
  
  &:last-of-type{
    margin-left: ${variables.marginDefault}px;
  }
  
`;

export const StyledLink = styled(Link)`  
  ${buttonStyle}
`;
