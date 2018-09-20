import React from 'react';
import ReactDOM from 'react-dom';


const calcReducer = (state = 0, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUBTRACT':
      return state - action.payload;
    case 'MULTIPLY':
      return state * action.payload;
    case 'DIVIDE':
      return state / action.payload;  
    default:
      return state;  
  }
};

const createStore = (reducerFn) => {
  
  let currentState = undefined;
  const subscribers = [];

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducerFn(currentState, action);
      subscribers.forEach (cb => cb());
    },
    subscribe: (cb) => subscribers.push(cb),
  };
};


const appStore = createStore (calcReducer);
appStore.subscribe( () => {
  console.log(appStore.getState());
});  


const addActionCreator = value => ({type: 'ADD', payload: value});
const subtractActionCreator = value => ({type: 'SUBTRACT', payload: value});
const multiplyActionCreator = value => ({type: 'MULTIPLY', payload: value});
const divideActionCreator = value => ({type: 'DIVIDE', payload: value});

const addNumber = value => {
  appStore.dispatch(addActionCreator(value));
}

const subtractNumber = value => {
  appStore.dispatch(subtractActionCreator(value));
}

const multiplyNumber = value => {
  appStore.dispatch(multiplyActionCreator(value));
}

const divideNumber = value => {
  appStore.dispatch(divideActionCreator(value));
}

class CalcTool extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
    }
    this.change = this.change.bind(this);
  }

  change(evt) {
    this.setState ({
        [ evt.target.name ]: evt.target.type === 'number' ? Number(evt.target.value) : evt.target.value
    },
    () => console.log(this.state)); //-- This calls the method (log statement) evcerytime the event triggers
  }

  render() {
    return <form>
        <table>
            <tbody>
                <tr><td>
                    Result: {this.props.result}
                </td></tr>
                <tr><td>
                    <label htmlFor="number-input" >Input:</label>
                    <input type="number" id="number-input" name="input" value={this.state.input} onChange={this.change}/>
                </td></tr>
                <tr>
                  <td>
                    <button type="button" onClick={() => this.props.add(this.state.input)}>+</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.props.subtract(this.state.input)}>-</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.props.multiply(this.state.input)}>*</button>
                  </td>
                  <td>
                    <button type="button" onClick={() => this.props.divide(this.state.input)}>/</button>
                  </td>
                </tr>
            </tbody>
        </table>
  
    </form>
  }
}

appStore.subscribe(() => {
  ReactDOM.render (
    <CalcTool appStore={appStore} result={appStore.getState()}
      add={addNumber} subtract={subtractNumber} multiply={multiplyNumber} divide={divideNumber}
    />,
    document.querySelector('#root'),
  )
  
});

addNumber(0);