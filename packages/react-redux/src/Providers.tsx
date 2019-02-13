import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route } from 'react-router-dom';

import AppRoot from './AppRoot';
import store, { history } from './store';

const Providers: React.FunctionComponent = () => {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={AppRoot} />
      </ConnectedRouter>
    </ReduxProvider>
  );
};

export default Providers;
