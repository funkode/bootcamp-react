import React from 'react';
import { CarsTable } from './CarsTable';
import { CarForm } from './CarForm';
import { ToolHeader } from './ToolHeader';

export class CarTool extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.cars.concat(),
            editCarId: -1,
        }
    }

    addCar = newCar => {
        const carDetails = {
            ...newCar,
            id: Math.max(...this.state.cars.map(c => c.id), 0) + 1,
        };
        const newCarArray = this.state.cars.concat(carDetails);
        this.setState({cars: newCarArray}, () => {
            console.log(this.state);
        });
    };

    deleteCar = carId => {
        console.log(carId);
        this.setState({cars: this.state.cars.filter(car => car.id !== carId)});
    }

    editCar = carId => {
        console.log(carId);
        this.setState({editCarId: carId});
    }

    saveCar = editedCar => {
        console.log(editedCar.id);
        const newCarArray = this.state.cars.concat();
        let carIndex = this.state.cars.findIndex(c=> c.id===editedCar.id);
        newCarArray[carIndex] = {...editedCar};
        this.setState({cars: newCarArray, editCarId:-1}, () => {
            console.log(this.state);
        });
    }

    render() {
        return <React.Fragment>
            <ToolHeader headerText = 'Car Tool'/>
            <CarsTable cars={this.state.cars} onDeleteCar={this.deleteCar} onEditCar={this.editCar} editCarId={this.state.editCarId} onSaveCar={this.saveCar}/>
            <CarForm onSubmitCar={this.addCar} />
        </React.Fragment>
    }
}