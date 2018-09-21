
export const APPEND_CAR = 'APPEND_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const REPLACE_CAR = 'REPLACE_CAR';
export const DELETE_CARS = 'DELETE_CARS';
export const ADD_SELECTED_CAR = 'ADD_SELECTED_CAR';
export const REMOVE_SELECTED_CAR = 'REMOVE_SELECTED_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const createAppendCarAction = car => ({ type: APPEND_CAR, payload: car });
export const createDeleteCarAction = carId => ({ type: DELETE_CAR, payload: carId });
export const createReplaceCarAction = car => ({ type: REPLACE_CAR, payload: car });
export const createDeleteCarsAction = () => ({ type: DELETE_CARS });
export const createAddSelectedCarAction = carId => ({ type: ADD_SELECTED_CAR, payload: carId });
export const createRemoveSelectedCarAction = carId => ({ type: REMOVE_SELECTED_CAR, payload: carId });
export const createEditCarAction = carId => ({ type: EDIT_CAR, payload: carId });
export const createCancelCarAction = () => ({ type: CANCEL_CAR });