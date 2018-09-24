'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _index = require('./index');

var _CarData = require('./CarData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = exports.resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/message`).then(res => res.json()).then(({ text }) => text);
    },
    cars: (_1, _2, { restURL }) => new _CarData.CarData(restURL).all(),
    car: (_, { carId }, { restURL }) => new _CarData.CarData(restURL).one(carId)
  },
  Mutation: {
    appendCar: async (_, { car }, { restURL }) => {
      const carData = new _CarData.CarData(restURL);
      const carAppended = await carData.append(car);
      _index.pubsub.publish('carAppended', { carAppended });
      return carAppended;
    },
    replaceCar: async (_, { car }, { restURL }) => {
      const carData = new _CarData.CarData(restURL);
      const carReplaced = carData.replace(car);
      _index.pubsub.publish('carReplaced', { carReplaced });
      return carReplaced;
    },
    deleteCar: async (_, { carId }, { restURL }) => {
      const carData = new _CarData.CarData(restURL);
      const carDeleted = await carData.delete(carId);
      _index.pubsub.publish('carDeleted', { carDeleted });
      return carDeleted;
    },
    deleteCars: (_, { carIds }, { restURL }) => new _CarData.CarData(restURL).deleteMany(carIds)
  },
  Subscription: {
    carAppended: {
      subscribe: () => {
        return _index.pubsub.asyncIterator('carAppended');
      }
    },
    carDeleted: {
      subscribe: () => {
        return _index.pubsub.asyncIterator('carDeleted');
      }
    },
    carReplaced: {
      subscribe: () => {
        return _index.pubsub.asyncIterator('carReplaced');
      }
    }
  }
};