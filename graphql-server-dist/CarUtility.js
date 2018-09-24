'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteCar = exports.fetchCar = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetchCar = exports.fetchCar = (restURL, carId) => {
    return (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(carId)}`).then(res => res.json());
};

const deleteCar = exports.deleteCar = (restURL, carId) => {
    return (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(car.id)}`, {
        method: 'DELETE'
    }).then(res => res.json());
};