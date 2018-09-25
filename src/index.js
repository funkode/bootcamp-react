import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

import { App } from './components/App';

const GRAPHQL_PORT = process.env.REACT_APP_GRAPHQL_PORT;

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `http://localhost:${GRAPHQL_PORT}`,
});

const client = new ApolloClient({
  cache, link, connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root'),
);


