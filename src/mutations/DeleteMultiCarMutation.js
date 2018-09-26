import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { SetEditCarMutation } from './SetEditCarIdMutation';

const DELETE_MULTI_CAR_MUTATION = gql`
  mutation DeleteMultiCarMutation($carIds: [ID]) {
    deleteCars(carIds : $carIds) {
      id
    },
  }
`;

export const DeleteMultiCarMutation = props =>
  <Mutation mutation={DELETE_MULTI_CAR_MUTATION}>
    {mutate => {

      const multiDelete = carIds => {
        return mutate({
          variables: { carIds },
          refetchQueries: props.refetchQueries,
        })
      }

      return <SetEditCarMutation {...props} onDeleteSelectedCars={multiDelete}/>
    }}
  </Mutation>;
