import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { SetEditCarMutation } from './SetEditCarIdMutation';

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCarMutation($carId: ID, $carIds: [ID]) {
    deleteCar(carId: $carId) {
      id
    },
    deleteCars(carIds : $carIds) {
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

      const multiDelete = carIds => {
        return mutate({
          variables: { carIds },
          refetchQueries: props.refetchQueries,
        })
      }

      return <SetEditCarMutation {...props} onDeleteCar={deleteCar} onDeleteSelectedCars={multiDelete}/>
    }}
  </Mutation>;
