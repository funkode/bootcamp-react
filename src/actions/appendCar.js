import {refreshCars} from './refreshCars';

export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';

export const createAppendCarRequestAction = car => ({
  type: APPEND_CAR_REQUEST,
});

export const appendCar = (car) => {

  return dispatch => {

    dispatch(createAppendCarRequestAction());

    return fetch('http://localhost:3020/cars',{
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(car),
    })
    .then(() => dispatch(refreshCars()));
  }
}