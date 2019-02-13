import React, { useState } from 'react';
import { InjectedIntl, injectIntl, IntlProvider as ReactIntlProvider } from 'react-intl';

import messages from '../intl';
import { getDefaultLocale } from '../intl/locale.utils';

// old context api to new context api adapter
interface ReactIntlContextValue extends InjectedIntl {
  setLocale: (locale: string) => void;
}

export const ReactIntlContext = React.createContext<ReactIntlContextValue>({} as ReactIntlContextValue);

interface ExIntlContextProps {
  setLocale: (locale: string) => void;
}

export const ExIntlContext = injectIntl<ExIntlContextProps>(({ children, intl, setLocale }) => {
  const values = {
    ...intl,
    setLocale,
  };
  return <ReactIntlContext.Provider value={values}>{children}</ReactIntlContext.Provider>;
});
// --

const IntlProvider: React.FunctionComponent = ({ children }) => {
  const [locale, setLocale] = useState(() => getDefaultLocale());
  return (
    <ReactIntlProvider locale={locale} messages={messages[locale]}>
      <ExIntlContext setLocale={setLocale}>{children}</ExIntlContext>
    </ReactIntlProvider>
  );
};

export default IntlProvider;
