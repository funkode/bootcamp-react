import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { DeleteMultiCarMutation } from './DeleteMultiCarMutation';

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($carId: ID) {
    deleteCar(carId: $carId) {
      id
    },
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

      return <DeleteMultiCarMutation {...props} onDeleteCar={deleteCar}/>
    }}
  </Mutation>;
