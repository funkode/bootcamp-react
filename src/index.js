import React from 'react';
import ReactDOM from 'react-dom';

import { appStore } from './appStore';
import { CarToolContainer } from './components';

ReactDOM.render(
  <CarToolContainer store={appStore} />,
  document.querySelector('#root'),
);
 console.log('here');