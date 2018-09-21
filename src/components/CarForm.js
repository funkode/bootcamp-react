import React from 'react';

export class CarForm extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            checked:false,
            id: -1,
            make:'',
            model:'',
            year:2019,
            color:'',
            price:0
        };

        this.change = this.change.bind(this);
    }

    change(evt) {
        this.setState ({
            [ evt.target.name ]: evt.target.type === 'number' ? Number(evt.target.value) : evt.target.value
        },
        () => console.log(this.state)); //-- This calls the method (log statement) evcerytime the event triggers
    }

    submitCar = () => {
        this.props.onSubmitCar(this.state);
        this.setState({
            make:'',
            model:'',
            year:2019,
            color:'',
            price:0
        })
    };

    render() {
        return <form>
            <table>
                <tbody>
                    <tr><td>
                        <label htmlFor="color-input" >Make:</label>
                        <input type="text" id="make-input" name="make" value={this.state.make} onChange={this.change}/>
                    </td></tr>
                    <tr><td>
                        <label htmlFor="color-input" >Model:</label>
                        <input type="text" id="modle-input" name="model" value={this.state.model} onChange={this.change}/>
                    </td></tr>
                    <tr><td>
                        <label htmlFor="color-input" >Year:</label>
                        <input type="number" id="year-input" name="year" value={this.state.year} onChange={this.change}/>
                    </td></tr>
                    <tr><td>
                        <label htmlFor="color-input" >Color:</label>
                        <input type="text" id="color-input" name="color" value={this.state.color} onChange={this.change}/>
                    </td></tr>
                    <tr><td>
                        <label htmlFor="color-input" >Price:</label>
                        <input type="number" id="price-input" name="price" value={this.state.price} onChange={this.change}/>
                    </td></tr>
                </tbody>
            </table>
            <button type="button" onClick={this.submitCar}>Submit Car</button>

        </form>
    }
}
