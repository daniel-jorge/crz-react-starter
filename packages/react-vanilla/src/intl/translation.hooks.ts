import { useContext } from 'react';

import { ReactIntlContext } from '../providers/intl.provider';

export const useIntl = () => {
  const intl = useContext(ReactIntlContext);
  return intl;
};

type LocaleState = [string, (locale: string) => void];

export const useLocaleState = (): LocaleState => {
  const intl = useContext(ReactIntlContext);
  return [intl.locale, intl.setLocale];
};
