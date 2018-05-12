import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Main from './Components/Main/Main';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/movies" component={Main} />
    </Switch>
  );
};

export default Router;
