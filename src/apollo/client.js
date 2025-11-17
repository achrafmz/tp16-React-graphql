import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { gql } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'include',
});

export const GET_ALL_COMPTES = gql`
query GetAllComptes {
  allComptes {
    id
    solde
    dateCreation
    type
  }
}
`;

export const SAVE_COMPTE = gql`
mutation SaveCompte($compte: CompteRequest!) {
  saveCompte(compte: $compte) {
    id
    solde
    dateCreation
    type
  }
}
`;
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});