import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createAppendCarAction, createDeleteCarAction,
  createReplaceCarAction, createDeleteCarsAction,
  createAddSelectedCarAction, createRemoveSelectedCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/cars';
import { refreshCars } from '../actions/refreshCars';

import { CarTool } from './CarTool';

export const CarToolContainer = connect(
  ({ cars, editCarId, selectedCarIds }) => ({ cars, editCarId, selectedCarIds }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    onAppendCar: createAppendCarAction,
    onDeleteCar: createDeleteCarAction,
    onReplaceCar: createReplaceCarAction,
    onDeleteCars: createDeleteCarsAction,
    onAddSelectedCar: createAddSelectedCarAction,
    onRemoveSelectedCar: createRemoveSelectedCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);