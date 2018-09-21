import React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export class CarTool extends React.Component {

  componentDidMount() {
    this.props.onRefreshCars();
  }

  render() {
    return <React.Fragment>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.props.cars} editCarId={this.props.editCarId} selectedCars={this.props.selectedCarIds}
        onEditCar={this.props.onEditCar} onDeleteCar={this.props.onDeleteCar}
        onSaveCar={this.props.onReplaceCar} onCancelCar={this.props.onCancelCar}
        onAddSelectedCar={this.props.onAddSelectedCar} onRemoveSelectedCar={this.props.onRemoveSelectedCar}
        onDeleteSelectedCars={this.props.onDeleteCars} />
      <CarForm buttonText="Add Car" onSubmitCar={this.props.onAppendCar} />
    </React.Fragment>;
  }
}
