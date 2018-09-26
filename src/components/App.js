import React from 'react';

import { withToolNameQuery, withCarsQuery, CARS_QUERY } from '../queries';
import { CarFormMutation } from './CarFormMutation';
import { DeleteCarMutation } from '../mutations/DeleteCarMutation';
import { CarAppendedSubscription } from '../subscriptions/CarAppendedSubscription';

import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';

const ToolHeaderContainer = withToolNameQuery(ToolHeader);
const CarsQueryContainer = withCarsQuery(({ loading, error, ...props}) => {

  if (loading) return "LOADING";

  if (error) {
    console.log(error);
    return null;
  }

  return <React.Fragment>
    <DeleteCarMutation {...props} />
  </React.Fragment>;

});

export const App = () =>
  <React.Fragment>
    <CarAppendedSubscription refetchQueries={[ { query: CARS_QUERY } ]} />
    <ToolHeaderContainer />
    <CarsQueryContainer render={props => <CarTable {...props} onRefreshCars={() => {}}/>} refetchQueries={[{ query: CARS_QUERY} ]}/>
    <CarFormMutation refetchQueries={[ { query: CARS_QUERY } ]} />
  </React.Fragment>;
 