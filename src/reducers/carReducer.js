import {
  APPEND_CAR, DELETE_CAR, REPLACE_CAR,
  DELETE_CARS, ADD_SELECTED_CAR,
  REMOVE_SELECTED_CAR, EDIT_CAR, CANCEL_CAR,
} from '../actions/cars';
import { 
  REFRESH_CARS_REQUEST, REFRESH_CARS_DONE,
} from '../actions/refreshCars';

const initialState = {
  cars: [
    { id: 1, make: 'Ford', model: 'Fusion', year: 2010, color: 'blue', price: 34000 },
    { id: 2, make: 'Ford', model: 'T', year: 1914, color: 'black', price: 400 },
  ],
  editCarId: -1,
  selectedCarIds: [],
};

export const carReducer = (state = initialState, action) => {

  let newCars;

  switch(action.type) {
  case REFRESH_CARS_REQUEST:
    return { ...state, loading: true };
  case REFRESH_CARS_DONE:
    return { ...state, loading: false, cars: action.payload };
  case APPEND_CAR:
    return {
      ...state,
      cars: state.cars.concat({
        ...action.payload,
        id: Math.max(...state.cars.map(c => c.id), 0) + 1,
      }),
    };
  case DELETE_CAR:
    return {
      ...state,
      cars: state.cars.filter(c => c.id !== action.payload),
      editCarId: -1,
    };
  case REPLACE_CAR:
    newCars = state.cars.concat();
    newCars[newCars.findIndex(c => c.id === action.payload.id)] = action.payload;
    return {
      ...state,
      cars: newCars,
      editCarId: -1,
    };
  case DELETE_CARS:
    return {
      ...state,
      cars: state.cars.filter(c => !state.selectedCarIds.includes(c.id)),
      selectedCarIds: [],
      editCarId: -1,
    };
  case ADD_SELECTED_CAR:
    return {
      ...state,
      selectedCarIds: state.selectedCarIds.concat(action.payload),
    };
  case REMOVE_SELECTED_CAR:
    return {
      ...state,
      selectedCarIds: state.selectedCarIds.filter(cId => cId !== action.payload),
    };
  case EDIT_CAR:
    return {
      ...state,
      editCarId: action.payload,
    };  
  case CANCEL_CAR:
    return {
      ...state,
      editCarId: -1,
    };  
  default:
    return state;
  }

};