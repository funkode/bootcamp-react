import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { SetShowCarIdMutation } from './SetShowCarIdMutation';

export const SELECT_CAR_MUTATION = gql`
  mutation SelectCarMutation($carIds: ID, $type: String) {
    selectCar(carId: $carId, type: $type) @client
  }
`;

export const SelectCarMutation = props =>
  <Mutation mutation={SELECT_CAR_MUTATION}>
    {mutate => {

      const selectCar = (carId) => {
        return mutate({
          variables: { carId, type: "add" },
        });
      };
    
      const removeCar = carId => {
        return mutate({
          variables: { carId, type: "remove" },
        })
      }
      
      return <SetShowCarIdMutation {...props} onAddSelectedCar={selectCar} onRemoveSelctedCar={removeCar} />;
    }}
  </Mutation>;

