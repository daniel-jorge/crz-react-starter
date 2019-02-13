import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import App from './App';
import NotFound from './pages/NotFound';

const AppRoot: React.FunctionComponent = () => {
  return (
    <Switch>
      <Redirect exact={true} from="/" to="/welcome" />
      <Route exact={true} path="/welcome" component={App} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoot;
