import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect } from 'react-redux';

import {CarTool} from './components/CarTool'

const car1 = {id:1, make:'Toyota', model: 'High Lander', year:2018, color: 'red', price:32000};
const car2 = {id:2, make:'Skoda', model: 'Sperb', year:2018, color: 'blue', price:45000};
const car3 = {id:3, make:'BMW', model: 'X5', year:2018, color: 'Silver', price:55000};
const car4 = {id:4, make:'Mercedes', model: 'GLE 450', year:2018, color: 'White', price:75000};
const initialState = [car1, car2, car3, car4];

const carReducer = (state = {cars: initialState, eidtcarId:-1, selectCarIds:[]}, action ) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
  case 'ADD':
    return addCar(state, action.payload);
  case 'DELETE':
    return deleteCar(state, action.payload);
  case 'EDIT':
    return editCar(state, action.payload);
  case 'TOGGLE':
    return handleSelectCar(state, action.payload);  
  case 'DELETESELECTED':
    return deleteSelectedCars(state, action.payload);
  case 'CANCEL':
    return cancel(action.payload);     
  case 'SAVE':
    return saveCar(state, action.payload);   
  default:
    return state;
  }
};

const appStore = createStore(carReducer, composeWithDevTools());

const addCar = (state, newCar) => {
  const carDetails = {
      ...newCar,
      id: Math.max(...state.cars.map(c => c.id), 0) + 1,
  };
  const newCarArray = state.cars.concat(carDetails);
  return {cars: newCarArray};
};

const deleteCar = (state, carId) => {
  console.log(carId);
  return {cars: state.cars.filter(car => car.id !== carId)};
}

const handleSelectCar = (state, carId )=> {
  console.log("Select Car:" + carId);
  if(state.selectCarIds.includes(carId)) {
      console.log("Toggle car to false");
      return {
        ...state,
        selectCarIds: state.selectCarIds.filter(cId => cId !== carId)
      };
  } else {
      const newSelectCarsArray = state.selectCarIds.concat(carId);
      return {
        ...state,
        selectCarIds: newSelectCarsArray 
      };
  }
}

const deleteSelectedCars = (state) => {
  console.log("Reached the method");
  console.log(state.cars);
  let newCarArray = state.cars.concat();
  state.selectCarIds.forEach( carId => {
      console.log("Deleting car:" + carId);
      newCarArray = newCarArray.filter(car => car.id !== carId);
  });
  return{
      cars:newCarArray,
      selectCarIds: []
  };
}

const editCar = (state, carId) => {
  console.log("Edit Car: " + carId);
  return {
    ...state,
    editCarId: carId
  };
}

const cancel = carId => {
  console.log("Cancel Edit: " + carId);
  return {editCarId: -1};
}

const saveCar = (state, editedCar) => {
  console.log(editedCar.id);
  const newCarArray = state.cars.concat();
  let carIndex = state.cars.findIndex(c => c.id === editedCar.id);
  newCarArray[carIndex] = {...editedCar};
  return {cars: newCarArray, editCarId:-1};
}

const addActionCreator = car => ({ type: 'ADD', payload: car });
const deleteActionCreator = carId => ({ type: 'DELETE', payload: carId });
const editActionCreator = carId => ({ type: 'EDIT', payload: carId });
const deleteSelectedActionCreator = value => ({ type: 'DELETESELECTED', payload: value });
const cancelActionCreator = carId => ({ type: 'CANCEL', payload: carId });
const toggleActionCreator = carId => ({ type: 'TOGGLE', payload: carId });
const saveActionCreator = carId => ({ type: 'SAVE', payload: carId });


const createContainer = connect(
  // map state to props -> data
  state => ({ cars: state.cars, editCarId: state.editCarId, selectCarIds: state.selectCarIds }),
  // map dispatch to props -> actions
  dispatch => bindActionCreators({
    onAddCar: addActionCreator,
    onDeleteCar: deleteActionCreator,
    onToggleSelectCar: toggleActionCreator,
    onDeleteMultipleCars: deleteSelectedActionCreator,
    onCancel: cancelActionCreator,
    onEditCar: editActionCreator,
    onSaveCar: saveActionCreator,
  }, dispatch)
);

const CarToolContainer = createContainer(CarTool);

ReactDOM.render(
  <CarToolContainer store={appStore} />,
  document.querySelector('#root'),
);