import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';

const makeApolloClient = () => {
  const client = new ApolloClient({
    link: ApolloLink.from([
      createUploadLink({
        uri: 'http://localhost:3000/graphql',
        // credentials: 'include',
      }),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return client;
};

export default makeApolloClient;
