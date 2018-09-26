import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

import { WebSocketLink } from 'apollo-link-ws';
import { split, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';

import { App } from './components/App';

const GRAPHQL_PORT = process.env.REACT_APP_GRAPHQL_PORT;

const cache = new InMemoryCache();

const clientStateLink = withClientState({
  cache,
  defaults: {
    toolName: 'Car Tool',
    editCarId: -1,
    selectedCarIds: [],
  },
  resolvers: {
    Mutation: {
      setEditCarId: (_, { editCarId }, { cache }) => {

        const EDIT_CAR_ID_QUERY = gql`
          query EditCarIdQuery {
            editCarId
          }
        `;

        const data = cache.readQuery({ query: EDIT_CAR_ID_QUERY });
        data.editCarId = editCarId;
        cache.writeQuery({ query: EDIT_CAR_ID_QUERY, data });
      },

      selectCar: (_, {carId, type}, {cache}) => {
        const SELECTED_CAR_ID_QUERY = gql`
          query SelectedCarIdQuery {
            selectedCarIds
          }
        `;

        const data = cache.readQuery({ query: SELECTED_CAR_ID_QUERY });
        let selectedCarIds = data.selectedCarIds.concat();
        type === 'add'
        ? selectedCarIds.push(carId)
        : selectedCarIds.filter(id => id !== carId);

        cache.writeQuery({ query: SELECTED_CAR_ID_QUERY, data : {selectedCarIds} });
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: `http://localhost:${GRAPHQL_PORT}/graphql`,
});

const webSocketLink = new WebSocketLink({
  uri: `ws://localhost:${GRAPHQL_PORT}/graphql`,
});

const link = split(
  ({ query }) => {
    const { operation, kind } = getMainDefinition(query);
    const result = (kind === 'OperationDefinition')
      && (operation === 'subscription');
    return result;
  },
  webSocketLink,
  ApolloLink.from([clientStateLink, httpLink]),
);

const client = new ApolloClient({
  cache, link, connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root'),
);


