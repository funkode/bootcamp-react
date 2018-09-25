import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TOOL_NAME_QUERY = gql`
  query ToolNameQuery {
    toolName @client
  }
`;

export const ToolNameQuery = props => {

  return <Query query={TOOL_NAME_QUERY}>
    {({ data, loading, errors}) => {

      if (errors) {
        console.log(errors);
        return null;
      }

      if (loading) {
        return null;
      }

      const TheComponent = props.children;

      return <TheComponent {...props} toolName={data.toolName} />;

    }}
  </Query>;

};