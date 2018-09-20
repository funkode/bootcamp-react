import React from 'react';
import PropTypes from 'prop-types';
import { CarViewRow } from './CarViewRow';
import { carPropTypes } from '../proptypes/carProps';
import { CarEditRow } from './CarEditRow';

export const CarsTable = ({cars, onDeleteCar, onEditCar, editCarId, onSaveCar, onDeleteMultipleCars, onCancel, onToggleSelectCar}) =>
<React.Fragment>
  <button type="button" onClick={() => onDeleteMultipleCars()}> Delete Cars</button>
  <table border="1" width="900">
    <thead>
      <tr>
        <td>Select</td>
        <td>Id</td>
        <td>Make</td>
        <td>Model</td>
        <td>Year</td>
        <td>Color</td>
        <td>Price</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      {cars.map(car =>
        car.id === editCarId 
        ? <CarEditRow key={car.id} car={car}  onSaveCar={onSaveCar} onCancel={onCancel} onToggleSelectCar={onToggleSelectCar} /> 
        : <CarViewRow key={car.id} car={car} onDeleteCar={onDeleteCar} onEditCar={onEditCar} onToggleSelectCar={onToggleSelectCar}/>
      )}
    </tbody>
  </table>
  </React.Fragment>;

CarsTable.propTypes = {
    cars: PropTypes.arrayOf(carPropTypes)
};

CarsTable.defaultProps = {cars: []}
