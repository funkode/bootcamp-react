import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CarTable } from './CarTable';

export const CAR_TABLE_QUERY = gql`
  query CarTableQuery {
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

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($carId: ID) {
    deleteCar(carId: $carId) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

export const CarTableQuery = () =>
  <Query query={CAR_TABLE_QUERY}>
    {({ data, loading, error}) => {

      if (loading) return 'Everybody Loves Raymond!';
      
      if (error) {
        console.log(error);
        return null;
      }

      return <Mutation mutation={DELETE_CAR_MUTATION}>
        {mutate => {
          const deleteCar = (carId) =>
            mutate({
              variables: { carId },
            });
            return <CarTable cars={data.cars}
              onRefreshCars={() => {}} onDeleteCar={deleteCar}/>;
        }}
      </Mutation>;
      
    }}
  </Query>;