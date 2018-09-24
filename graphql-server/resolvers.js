import fetch from 'node-fetch';
import {fetchCar, deleteCar} from './CarUtility';

export const resolvers = {
  Query: {
    message: (_1, _2, { restURL }) => {

      debugger;

      return fetch(`${restURL}/message`)
        .then(res => res.json())
        .then(({ text }) => text);

    },
    cars: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/cars`)
      .then(res => res.json());
    },
    car: ( _1, { carId }, { restURL }) => {
      return fetchCar(restURL, carId);
      // return fetch(`${restURL}/cars/${encodeURIComponent(carId)}`)
      // .then(res => res.json());
    },
  },

  Mutation: {
    appendCar: (_1 , { car }, { restURL }) => {
      return fetch (`${restURL}/cars`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(car)
      })
      .then(res => res.json());
    },
    deleteCar: (_1 , { carId }, { restURL }) => {
      return deleteCar(`${restURL}`, carId).then(res);
    },
    replaceCar: (_1 , { carId, car }, { restURL }) => {
      return fetch (`${restURL}/cars/${encodeURIComponent(carId)}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(car)
      })
      .then(res => res.json());
    },
  }
};
