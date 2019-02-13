import { ConnectedRouter } from 'connected-react-router';
import React from 'react';

import { history } from '../store';

const Providers: React.FunctionComponent = ({ children }) => {
  return <ConnectedRouter history={history}>{children}</ConnectedRouter>;
};

export default Providers;
