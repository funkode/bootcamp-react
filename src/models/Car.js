export class Car {
    constructor(carData) {
        Object.assign(this, carData);
    }

    getInfo() {
        return this.id + ' ' + this.make + ' ' + this.model + ' ' + this.year + ' ' + this.color + ' ' + this.price;
    }
}