import React from 'react';

import { CarsQuery, CARS_QUERY } from '../queries/CarsQuery';
import { CarFormMutation } from './CarFormMutation';
import { CarAppendedSubscription } from '../subscriptions/CarAppendedSubscription';

import { CarTable } from './CarTable';

const bulkDeleteButtonText = 'Bulk Delete 2';

export const App = () =>
  <React.Fragment>
    <CarAppendedSubscription refetchQueries={[ { query: CARS_QUERY } ]} />
    <CarsQuery>
      {props => <CarTable {...props}
        bulkDeleteButtonText={bulkDeleteButtonText} />}
    </CarsQuery>
    <CarFormMutation refetchQueries={[ { query: CARS_QUERY } ]} />
  </React.Fragment>;
 