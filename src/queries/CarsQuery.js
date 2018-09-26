import React from 'react';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo';


export const CARS_QUERY = gql`
  query CarsQuery {
    editCarId @client
    selectedCarIds @client
    showCarId @client
    cars {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export const withCarsQuery = graphql(CARS_QUERY, {
  props: ({ data }) => ({
    loading: data.loading,
    error: data.error,
    editCarId: data.editCarId,
    selectedCars: data.selectedCarIds,
    showCarId: data.showCarId,
    cars:data.cars,
  }),
});