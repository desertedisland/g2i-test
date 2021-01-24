import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cardsStore from './state/store';

import App from './App';

render(
  <Provider store={cardsStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
