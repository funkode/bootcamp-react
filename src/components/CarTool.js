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
            selectCarIds:[],
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

    handleSelectCar = carId => {
        console.log("Select Car:" + carId);
        if(this.state.selectCarIds.includes(carId)) {
            console.log("Toggle car to false");
            this.setState({selectCarIds: this.state.selectCarIds.filter(cId => cId !== carId)}, 
            () => {console.log(this.state.selectCarIds)
            });
        } else {
            const newSelectCarsArray = this.state.selectCarIds.concat(carId);
            this.setState({
                selectCarIds: newSelectCarsArray
            }, () => {console.log(this.state.selectCarIds)});
        }
    }

    deleteCar = carId => {
        console.log(carId);
        this.setState({cars: this.state.cars.filter(car => car.id !== carId)});
    }

    deleteMultipleCars = () => {
        console.log("Reached the method");
        console.log(this.state.cars);
        let newCarArray = this.state.cars.concat();
        this.state.selectCarIds.forEach( carId => {
            console.log("Deleting car:" + carId);
            newCarArray = newCarArray.filter(car => car.id !== carId);
        });
        this.setState({
            cars:newCarArray,
            selectCarIds: []
        });
    }

    editCar = carId => {
        console.log("Edit Car: " + carId);
        this.setState({editCarId: carId});
    }

    cancel = carId => {
        console.log("Cancel Edit: " + carId);
        this.setState({editCarId: -1});
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
            <CarsTable cars={this.state.cars} 
                onDeleteCar={this.deleteCar} 
                onEditCar={this.editCar} 
                editCarId={this.state.editCarId} 
                onSaveCar={this.saveCar} 
                onDeleteMultipleCars={this.deleteMultipleCars}
                onCancel={this.cancel}
                onToggleSelectCar={this.handleSelectCar}/>
            <CarForm onSubmitCar={this.addCar} />
        </React.Fragment>
    }
}