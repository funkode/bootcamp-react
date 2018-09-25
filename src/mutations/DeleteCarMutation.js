import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { CarTable } from '../components/CarTable';

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($carId: ID) {
    deleteCar(carId: $carId) {
      id
    }
  }
`;

export const DeleteCarMutation = props =>
  <Mutation mutation={DELETE_CAR_MUTATION}>
    {mutate => {

      const deleteCar = carId => {
        return mutate({
          variables: { carId },
          refetchQueries: props.refetchQueries,
        });
      };

      return <CarTable {...props} onDeleteCar={deleteCar} />;
    }}
  </Mutation>;
