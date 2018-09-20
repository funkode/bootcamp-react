import React from 'react';
import PropTypes from 'prop-types';
import { CarViewRow } from './CarViewRow';
import { carPropTypes } from '../proptypes/carProps';
import { CarEditRow } from './CarEditRow';

export const CarsTable = ({cars, onDeleteCar, onEditCar, editCarId, onSaveCar}) =>
    <table>
      <thead>
        <tr>
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
          ? <CarEditRow key={car.id} car={car}  onSaveCar={onSaveCar}/> 
          : <CarViewRow key={car.id} car={car} onDeleteCar={onDeleteCar} onEditCar={onEditCar}/>
        )}
      </tbody>
    </table>;

CarsTable.propTypes = {
    cars: PropTypes.arrayOf(carPropTypes)
};

CarsTable.defaultProps = {cars: []}
