import React from 'react';
import {carPropTypes} from '../proptypes/carProps';


export const CarViewRow = ({car, onDeleteCar, onEditCar, onToggleSelectCar}) =>
<React.Fragment>
  <tr>
    <td><input type="checkbox" value="false" onChange={() => onToggleSelectCar(car.id)}/></td>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td> 
      <button type="button" onClick={() => onDeleteCar(car.id)}>Delete Car</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" onClick={() => onEditCar(car.id)}>Edit Car</button>
    </td>
  </tr>
</React.Fragment>;

CarViewRow.propTypes = {
    car: carPropTypes
};

