import React from 'react';

import { ApolloProvider } from 'react-apollo';
import makeApolloClient from '../apollo-client';

const client = makeApolloClient();

interface StoreProviderProps {
  children: React.ReactNode;
}
const StoreProvider: React.FunctionComponent<StoreProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StoreProvider;
