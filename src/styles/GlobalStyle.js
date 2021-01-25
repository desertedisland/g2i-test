import { createGlobalStyle } from 'styled-components';
import styleVariables from './variables';
import QuicksandFont from '../../assets/fonts/Quicksand-variable.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: Quicksand;
    src: url(${QuicksandFont})
  }  

  body{
    
    font-family: Quicksand, sans-serif;
    
    background: ${styleVariables.backgroundDefault};
    color: ${styleVariables.colorDefault};
    
    .main{  
      width: 60%;
      margin: ${styleVariables.marginDefault}px auto;
    
      @media (max-width: ${styleVariables.breakMobile}px) {
        width: 90%;      
      }      
      
    }
    
  }
    
`;

export default GlobalStyle;
