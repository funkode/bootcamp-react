import fetch from 'node-fetch';
import { pubsub } from './index';

import { CarData } from './CarData';

export const resolvers = {
  Query: {
    myMessage: (_1, _2, { restURL }) => {
      return fetch(`${restURL}/message`)
        .then(res => res.json())
        .then(({ text }) => text);
    },
    cars: (_1, _2, { restURL }) => new CarData(restURL).all(),
    car: (_, { carId }, { restURL }) => new CarData(restURL).one(carId),
  },
  Mutation: {
    appendCar: async (_, { car }, { restURL }) => {
      const carData = new CarData(restURL);
      const carAppended = await carData.append(car);
      pubsub.publish('carAppended', { carAppended });
      return carAppended;
    },
    replaceCar: async (_, { car }, { restURL }) => {
      const carData = new CarData(restURL);
      const carReplaced = carData.replace(car);
      pubsub.publish('carReplaced', { carReplaced });
      return carReplaced;
    }, 
    deleteCar: async (_, { carId }, { restURL }) => {
      const carData = new CarData(restURL);
      const carDeleted = await carData.delete(carId);
      pubsub.publish('carDeleted', { carDeleted });
      return carDeleted;
    },
    deleteCars: (_, { carIds }, { restURL }) => new CarData(restURL).deleteMany(carIds),
  },
  Subscription: {
    carAppended: {
      subscribe: () => {
        return pubsub.asyncIterator('carAppended');
      },
    },
    carDeleted: {
      subscribe: () => {
        return pubsub.asyncIterator('carDeleted');
      },
    },
    carReplaced: {
      subscribe: () => {
        return pubsub.asyncIterator('carReplaced');
      }
    }
  },
};
