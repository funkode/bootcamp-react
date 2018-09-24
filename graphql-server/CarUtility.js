import fetch from 'node-fetch';

export const fetchCar = (restURL, carId ) => {
    return fetch(`${restURL}/cars/${encodeURIComponent(carId)}`)
    .then(res => res.json());
}

export const deleteCar = (restURL, carId ) => {
    return fetch (`${restURL}/cars/${encodeURIComponent(car.id)}`, {
        method: 'DELETE'
    }).then(res => res.json());
}