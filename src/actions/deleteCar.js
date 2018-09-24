import {refreshCars} from './refreshCars';

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';

export const createAppendCarRequestAction = car => ({
  type: DELETE_CAR_REQUEST,
});

export const deleteCar = (carId) => {

  return dispatch => {

    dispatch(createAppendCarRequestAction());

    return fetch('http://localhost:3020/cars/' + carId,{
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
    })
    .then(() => dispatch(refreshCars()));
  }
}