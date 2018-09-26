import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { SelectCarMutation } from './SelectCarMutation';


export const REPLACE_CAR_MUTATION = gql`
  mutation ReplaceCarMutation($car: ReplaceCar) {
    replaceCar(car: $car){
      id
      model
      make
    }
  }
`;

export const ReplaceCarMutation = props =>
  <Mutation mutation={REPLACE_CAR_MUTATION}>
    {mutate => {

      const replaceCar = car => {
        return mutate({
          variables: { car },
          refetchQueries: props.refetchQueries
        });
      };
    
      return <SelectCarMutation {...props} onSaveCar={replaceCar} />;
    }}
  </Mutation>;

