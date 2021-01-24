import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

const App = () => (
  [
    <GlobalStyle key="styles" />,
    <div key="main" className="main">

      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />

      </Switch>

    </div>,
  ]

);

export default withRouter(App);
