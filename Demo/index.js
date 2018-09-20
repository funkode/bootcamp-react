//import without the {} known as default imports
import React from 'react';
import ReactDOM from 'react-dom';

//with {} known as named imports/exports
import { Widget } from './models/Widget';
import { Car } from './models/Car';
import {ToolHeader, CarsTable, ColorForm, CarForm} from './components';

const person = {
  firstName: 'Sreedhar',
  lastName: 'Vajrala',
  dob: 'Aug-10',
  school: 'IIT Bombay',
  homeTown: 'Hyderabad, India',
  favColor: 'Red',
  interestingThings: ["Cooking", "Badminton", "Traveling"],
  quote: "You have to dream before your dreams come true",
  quoteBy: "APJ Abdul Kalam"
};

const widget1 = new Widget({name: 'S', size: 'small', prioce: 22});
const widget2 = new Widget({name: 'M', size: 'medium', prioce: 55});
const widget3 = new Widget({name: 'L', size: 'large', prioce: 99});

//Push is mutable
// const widgets = [];
// widgets.push(widget1);
// widgets.push(widget2);
// widgets.push(widget3);

//Immutable technique
let widgets = [];
widgets = widgets.concat(widget1);
widgets = widgets.concat(widget2);
widgets = widgets.concat(widget3);
console.log(widgets.map(w => w.name));

// const CarRow = ({car}) =>
//   <tr>
//     <td>{car.id}</td>
//     <td>{car.make}</td>
//     <td>{car.model}</td>
//     <td>{car.horsePower}</td>
//   </tr>;

// const CarTable = ({cars}) =>
//   <React.Fragment>
//     <h3>Car Table</h3>
//     <table>
//       <thead>
//         <tr>
//           <td>Id</td>
//           <td>Make</td>
//           <td>Model</td>
//           <td>Horse Power</td>
//         </tr>
//       </thead>
//       <tbody>
//         {cars.map(car => <CarRow key={car.id} car={car}/>)}
//       </tbody>
//     </table>
//   </React.Fragment>;

const car1 = new Car({id:1, make:'Toyota', model: 'High Lander', year:2018, color: 'red', price:32000});
const car2 = new Car({id:2, make:'Skoda', model: 'Sperb', year:2018, color: 'blue', price:45000});
const car3 = new Car({id:3, make:'BMW', model: 'X5', year:2018, color: 'Silver', price:55000});
const car4 = new Car({id:4, make:'Mercedes', model: 'GLE 450', year:2018, color: 'White', price:75000});
const cars = [car1, car2, car3, car4];

const Interests = (props) => <ul>
  {props.params.map(interestingThing => <li>{interestingThing}</li>)}
</ul>; 

const PersonDetails = (props) => {

  return (
    <div id="personDetails">
      <h1>{props.params.firstName}'s Profile Page</h1>
      <h3>Basic Info</h3>
      <ul>
          <li>Name: {props.params.lastName}, {props.params.firstName}</li>
          <li>DOB: {props.params.dob}</li>
          <li>Fav Color: {props.params.favColor}</li>
          <li>School: {props.params.school}</li>
          <li>Home Town: {props.params.homeTown}</li>
      </ul>
      <h3>{props.params.firstName} likes</h3>
      <Interests params = {props.params.interestingThings} />
      <h3>{props.params.firstName} likes the quote</h3>
      <p>{props.params.quote}<br></br><i>~{props.params.quoteBy}</i></p>
    </div>
  );

};

const colors = ['red', 'green', 'blue'];

const addColor = newColor => {
  colors.push(newColor);
  renderCarTool();
  console.log(colors);
}

const addCar = newCar => {
  cars.push(new Car({id:cars.length + 1, make: newCar.make, model:newCar.model, color: newCar.color, year: newCar.year, price: newCar.price}));
  renderCarTool();
}

const renderCarTool = () => {
  ReactDOM.render(
    <div>
      <ToolHeader headerText="Welcome!" />
      {/* <PersonDetails params = {person} />
      
      <h3>Car table with default props</h3>
  <CarsTable /> 
      <h3>Color Form</h3>
      <ColorForm onSubmitColor={addColor}/>*/}
      <CarsTable cars = {cars} />
      <h3>Enter the car details</h3>
      <CarForm onSubmitCar={addCar} />
    </div>,
    document.querySelector('#root')
  );
};

renderCarTool();