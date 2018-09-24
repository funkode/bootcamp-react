import {refreshCars} from './refreshCars';

export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';

export const createReplaceCarRequestAction = car => ({
  type: REPLACE_CAR_REQUEST,
});

export const replaceCar = (car) => {

  return dispatch => {

    dispatch(createReplaceCarRequestAction());

    return fetch('http://localhost:3020/cars/' + car.id,{
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(car),
    })
    .then(() => dispatch(refreshCars()));
  }
}