import React from 'react';

import { ToolNameQuery, CarsQuery, CARS_QUERY } from '../queries';
import { CarFormMutation } from './CarFormMutation';
import { CarAppendedSubscription } from '../subscriptions/CarAppendedSubscription';

import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';

const bulkDeleteButtonText = 'Bulk Delete 2';

export const App = () =>
  <React.Fragment>
    <CarAppendedSubscription refetchQueries={[ { query: CARS_QUERY } ]} />
    <ToolNameQuery>
      {props => <ToolHeader headerText={props.toolName} />}
    </ToolNameQuery>
    <CarsQuery>
      {props => <CarTable {...props}
        bulkDeleteButtonText={bulkDeleteButtonText} />}
    </CarsQuery>
    <CarFormMutation refetchQueries={[ { query: CARS_QUERY } ]} />
  </React.Fragment>;
 