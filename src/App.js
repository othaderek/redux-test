import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Counter from './Counter';
import { createStore } from 'redux';

console.log(createStore);
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

const defaultState = { count: 0 };

const reducer = (prevState = defaultState, action) => {
  console.log("prevState: ", prevState);
  console.log("action: ", action);

  if (action.type === "INCREMENT_COUNT"){
    return {count: prevState.count + 1 };
  } else if (action.type === "DECREMENT_COUNT"){
    return {count: prevState.count - 1}
  };
  return prevState
}

const store = createStore(reducer);

debugger

// redux to manage this: {count: 0}
class App extends React.Component {

  increment = () => {
    store.dispatch({ type: "INCREMENT_COUNT", count: 1 })
  };

  decrement = () => {
    store.dispatch({ type: "DECREMENT_COUNT", count: -1 })
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
