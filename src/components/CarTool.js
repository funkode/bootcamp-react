import React from 'react';
import { CarsTable } from './CarsTable';
import { CarForm } from './CarForm';
import { ToolHeader } from './ToolHeader';

export class CarTool extends React.Component { 

    render() {
        return <React.Fragment>
            <ToolHeader headerText = 'Car Tool'/>
            <CarsTable cars={this.props.cars} 
                onDeleteCar={this.props.onDeleteCar} 
                onEditCar={this.props.onEditCar} 
                editCarId={this.props.editCarId} 
                onSaveCar={this.props.onSaveCar} 
                onDeleteMultipleCars={this.props.onDeleteMultipleCars}
                onCancel={this.props.onCancel}
                onToggleSelectCar={this.props.onToggleSelectCar}/>
            <CarForm onSubmitCar={this.props.onAddCar} />
        </React.Fragment>
    }
    
 }