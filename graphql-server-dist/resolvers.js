'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _CarUtility = require('./CarUtility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = exports.resolvers = {
  Query: {
    message: (_1, _2, { restURL }) => {

      debugger;

      return (0, _nodeFetch2.default)(`${restURL}/message`).then(res => res.json()).then(({ text }) => text);
    },
    cars: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/cars`).then(res => res.json());
    },
    car: (_1, { carId }, { restURL }) => {
      return (0, _CarUtility.fetchCar)(restURL, carId);
      // return fetch(`${restURL}/cars/${encodeURIComponent(carId)}`)
      // .then(res => res.json());
    }
  },

  Mutation: {
    appendCar: (_1, { car }, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      }).then(res => res.json());
    },
    deleteCar: (_1, { carId }, { restURL }) => {
      return (0, _CarUtility.deleteCar)(`${restURL}`, carId).then(res);
    },
    replaceCar: (_1, { carId, car }, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(carId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      }).then(res => res.json());
    }
  }
};