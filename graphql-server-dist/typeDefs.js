"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const typeDefs = exports.typeDefs = `
  type Query {
    message: String
    cars: [Car]
    car(carId: ID): Car
  }
  type Mutation {
    appendCar(car: AppendCar): Car
    deleteCar(carId: ID): Car
    replaceCar(carId: ID, car: AppendCar): Car
  }

  type Car {
    id: ID
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }

  input AppendCar {
    make: String
    model: String
    year: Int
    color: String
    price: Float
  }
`;