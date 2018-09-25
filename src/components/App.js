import React from 'react';

import { CarTableQuery, CAR_TABLE_QUERY } from './CarTableQuery';
import { CarFormMutation } from './CarFormMutation';

export const App = () =>
  <React.Fragment>
    <CarTableQuery />
    <CarFormMutation refetchQueries={[ { query: CAR_TABLE_QUERY } ]} />
  </React.Fragment>;
