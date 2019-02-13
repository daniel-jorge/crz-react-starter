import gql from 'graphql-tag';

const query = gql`
  query Continents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
export default query;
