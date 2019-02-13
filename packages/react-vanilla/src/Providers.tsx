import React from 'react';

import { Route } from 'react-router-dom';

import AppRoot from './AppRoot';
import IntlProvider from './providers/intl.provider';
import RouterProvider from './providers/router.provider';
import StoreProvider from './providers/store.provider';
import UiProvider from './providers/ui.provider';

const Providers: React.FunctionComponent = () => {
  return (
    <StoreProvider>
      <UiProvider>
        <IntlProvider>
          <RouterProvider>
            <Route path="/" component={AppRoot} />
          </RouterProvider>
        </IntlProvider>
      </UiProvider>
    </StoreProvider>
  );
};

export default Providers;
