import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { appendCar } from '../actions/appendCar';
import { deleteCar } from '../actions/deleteCar';
import { replaceCar } from '../actions/replaceCar';
 
import {
  //createAppendCarAction, createDeleteCarAction,
  createDeleteCarsAction,
  createAddSelectedCarAction, createRemoveSelectedCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/cars';
import { refreshCars } from '../actions/refreshCars';

import { CarTool } from './CarTool';

export const CarToolContainer = connect(
  ({ cars, editCarId, selectedCarIds }) => ({ cars, editCarId, selectedCarIds }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    //onAppendCar: createAppendCarAction,
    onAppendCar: appendCar,
    //onDeleteCar: createDeleteCarAction,
    onDeleteCar: deleteCar,
    onReplaceCar: replaceCar,
    onDeleteCars: createDeleteCarsAction,
    onAddSelectedCar: createAddSelectedCarAction,
    onRemoveSelectedCar: createRemoveSelectedCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);