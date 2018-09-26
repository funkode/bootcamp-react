import React from 'react';
//import {CarDeleteMutation} from '../mutations/DeleteCarMutation';
//import { CAR_TABLE_QUERY } from './CarTableQuery';

export const CarViewRow = ({ car, onDeleteCar, onEditCar, selected, onSelectCar, onShowCar }) =>
  <tr>
    <td><input type="checkbox" checked={selected}
      onChange={evt => onSelectCar({ checked: evt.target.checked, carId: car.id })} /></td>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button" onClick={() => onEditCar(car.id)}>Edit</button>
      <button type="button" onClick={() => onDeleteCar(car.id)}>Delete</button>
      <button type="button" onClick={() => onShowCar(car.id)}>Show</button>
    </td>
  </tr>;
