import React from 'react';
import {carPropTypes} from '../proptypes/carProps';

export class CarEditRow extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            id: props.car.id,
            make: props.car.make,
            model: props.car.model,
            year: props.car.year,
            color: props.car.color,
            price: props.car.price,
        };

        this.change = this.change.bind(this);
    }

    change(evt) {
        this.setState ({
            [ evt.target.name ]: evt.target.type === 'number' ? Number(evt.target.value) : evt.target.value
        },
        () => console.log(this.state)); //-- This calls the method (log statement) evcerytime the event triggers
    }

    saveCar = () => {
      //console.log(this.state);
      this.props.onSaveCar(this.state);
    };

    render() {
        return (
              <tr>
                <td>{this.state.id}</td>
                <td>
                  <input type="text" id="make-input" name="make" value={this.state.make} onChange={this.change}/>
                </td> 
                <td>
                  <input type="text" id="modle-input" name="model" value={this.state.model} onChange={this.change}/>
                </td>
                <td>
                  <input type="text" id="year-input" name="year" value={this.state.year} onChange={this.change}/>
                </td>
                <td>
                  <input type="text" id="color-input" name="color" value={this.state.color} onChange={this.change}/>
                </td>
                <td>
                  <input type="text" id="price-input" name="price" value={this.state.price} onChange={this.change}/>
                </td>
                <td>
                  <button type="button" onClick={() => this.saveCar(this.state)}>Save</button>
                  <button type="button" onClick={null}>Cancel</button>
                </td>
              </tr>
          )
    }
}


