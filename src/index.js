//import without the {} known as default imports
import React from 'react';
import ReactDOM from 'react-dom';

import { CarTool } from './components/CarTool';

const car1 = {id:1, make:'Toyota', model: 'High Lander', year:2018, color: 'red', price:32000};
const car2 = {id:2, make:'Skoda', model: 'Sperb', year:2018, color: 'blue', price:45000};
const car3 = {id:3, make:'BMW', model: 'X5', year:2018, color: 'Silver', price:55000};
const car4 = {id:4, make:'Mercedes', model: 'GLE 450', year:2018, color: 'White', price:75000};
const cars = [car1, car2, car3, car4];

const renderCarTool = () => {
  ReactDOM.render(
    <CarTool cars = {cars} />,
    document.querySelector('#root')
  );
};

renderCarTool();