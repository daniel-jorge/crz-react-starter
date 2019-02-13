import { createMemoryHistory, MemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import { Router } from 'react-router';

import IntlProvider from '../providers/intl.provider';

interface TestContextApi {
  withIntl: () => TestContextApi;
  withRouter: (route: string) => TestContextApi;
  build: () => {
    componentInContext: ReactElement<any>;
    history?: MemoryHistory<any>;
  };
}

const testContextBuilder = (component: ReactElement<any>): TestContextApi => {
  let withIntl = false;
  let withRouter: string | null = null;

  const api: TestContextApi = {
    withIntl: () => {
      withIntl = true;
      return api;
    },
    withRouter: (route: string = '/') => {
      withRouter = route;
      return api;
    },
    build: () => {
      let cic = component;
      let extra: any = {};
      if (withIntl) {
        cic = <IntlProvider>{cic}</IntlProvider>;
      }
      if (withRouter) {
        const history = createMemoryHistory({ initialEntries: [withRouter] });
        cic = <Router history={history}>{cic}</Router>;
        extra = { ...extra, history };
      }
      return { componentInContext: cic, ...extra };
    },
  };

  return api;
};

export { testContextBuilder };
