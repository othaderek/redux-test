import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Counter from './Counter';
import { createStore } from 'redux';
// createStore( reducer, preloadedState, enhancer)
// subscribe, getState, dispatch are main 3 functions in store that we typically use.

// dispatch is how we update our store and give it new information and data and
// it will know how to do something to update that information
// diispatch is an action that needs two things an object and a "type"
// type is what the action type is

// getState is like a getter, "give me the info from my store"
// you can do stuff like store.getState().count, given that "count" object is in you store.

// subscribe: everytime my store changes run a function with the new information
// ability to have a callback with every data change.

// Whatever the return value is for store.getState() is my "store"
console.log(createStore);

const defaultState = { count: 0 };

const reducer = (prevState = defaultState, action) => {
  console.log("prevState: ", prevState);
  console.log("action: ", action);

  switch (action.type) {
    case "INCREMENT_COUNT":
      return {count: prevState.count + 1 };
      break;
    case "DECREMENT_COUNT":
      return {count: prevState.count - 1};
      break;
    case "INCREMENT_COUNT_BY_THREE":
      return {count: prevState.count + 3};
      break;
    case "INCREMENT_COUNT_BY_FIVE":
      return {count: prevState.count + 5};
      break;
    case "DECREMENT_COUNT_BY_THREE":
      return {count: prevState.count - 3};
      break;
    case "DECREMENT_COUNT_BY_FIVE":
      return {count: prevState.count - 5};
      break;
    default:
      return defaultState
  }
}

const store = createStore(reducer);

debugger

// redux to manage this: {count: 0}
class App extends React.Component {

  increment = () => {
    store.dispatch({ type: "INCREMENT_COUNT"})
  };

  decrement = () => {
    store.dispatch({ type: "DECREMENT_COUNT"})
  };
  render () {
    return(
      <div className="App">
        <Header count={null}/>
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          count={null}
          />
      </div>
    );
  }
}

export default App;
