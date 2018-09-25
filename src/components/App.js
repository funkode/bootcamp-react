import React from 'react';

// import { CarTableQuery, CAR_TABLE_QUERY } from './CarTableQuery';
import { CarFormMutation } from './CarFormMutation';

import { CarsQuery, CARS_QUERY } from '../queries/CarsQuery';
import { CarTable } from './CarTable';

// <CarsQuery render={props => <CarTable {...props} />} />
// <CarsQuery component={CarTable} />
// <CarsQuery>
//   {props => <CarTable {...props} />}
// </CarsQuery>

const bulkDeleteButtonText = 'Bulk Delete 2';

export const App = () =>
  <React.Fragment>
    <CarsQuery>
      {props => <CarTable {...props} bulkDeleteButtonText={bulkDeleteButtonText} />}
    </CarsQuery>
    <CarFormMutation refetchQueries={[ { query: CARS_QUERY } ]} />
  </React.Fragment>;
