import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


export const SET_SHOW_CAR_ID_MUTATION = gql`
  mutation SetShowCarIdMutation($carId: ID) {
    setShowCarId(showCarId: $carId) @client
  }
`;

export const SetShowCarIdMutation = props =>
  <Mutation mutation={SET_SHOW_CAR_ID_MUTATION}>
    {mutate => {

      const showCar = carId => {
        return mutate({
          variables: { carId },
        });
      };
      
      const hideCar = () => showCar(-1);
     
      
      const TheComponent = props.children;

      return <TheComponent {...props} onShowCar={showCar} onHideCar={hideCar} />;
    }}
  </Mutation>;

