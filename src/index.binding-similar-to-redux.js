const calcReducer = (state = 0, action) => {
  console.log('state: ', state, 'action: ', action);

  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUBTRACT':
      return state - action.payload;
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

// appStore.dispatch(addActionCreator(1));
// appStore.dispatch(subtractActionCreator(2));
// appStore.dispatch(addActionCreator(3));
// appStore.dispatch(subtractActionCreator(4));
// appStore.dispatch(addActionCreator(5));

const bindActionCreators = (action, dispatch) => {
  return Object.keys(actions).reduce((boundActions, actionKey) => {
    boundActions[actionKey] = (...params) => dispatch(actions[actionKey](...params));
    return boundActions;
  }, {});
}

const {add, subtract} = bindActionCreators ( {
  add: addActionCreator,
  subtract : subtractActionCreator,
}, appStore.dispatch);

add(1);
subtract(2);
