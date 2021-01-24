import styled from 'styled-components';
import variables from '../../styles/variables';

export const AnswerDisplay = styled.ul`
      
    list-style-type: none;
    
    li{
      margin: 0;
      padding: ${variables.marginDefault / 2}px 0;
      
      &.correct:before{
        content: '✔';
        color: ${variables.primaryColor};
        padding: 8px;
        font-size: 20px;
      }

      &.incorrect:before{
        content: '✖';
        color: ${variables.dangerColor};
        padding: 8px;
        font-size: 20px;
      }
         
    
  }
  
`;
