import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { ReplaceCarMutation } from './ReplaceCarMutation';


export const SET_EDIT_CAR_ID_MUTATION = gql`
  mutation SetEditCarIdMutation($carId: ID) {
    setEditCarId(editCarId: $carId) @client
  }
`;

export const SetEditCarMutation = props =>
  <Mutation mutation={SET_EDIT_CAR_ID_MUTATION}>
    {mutate => {

      const editCar = carId => {
        return mutate({
          variables: { carId },
        });
      };
      
      const cancelCar = () => editCar(-1);
     
      return <ReplaceCarMutation {...props} onEditCar={editCar} onCancelCar={cancelCar} />;
    }}
  </Mutation>;

