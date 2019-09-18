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

// getState is like a getter, "give me the info from my store"
// you can do stuff like store.getState().count, given that "count" object is in you store.

// subscribe: everytime my store changes run a function with the new information
// ability to have a callback with every data change.

// Whatever the return value is for store.getState() is my "store"

const store = createStore((prevState, action) => {
  console.log("prevState: ", prevState);
  console.log("action: ", action);

  if (action.count){
    return {count: prevState.count + action.count };
  }

  return {count: 0}
});

// redux to manage this: {count: 0}
class App extends React.Component {

  // state = {
  //   count: 0
  // }

  increment = () => {
    store.dispatch({ type: "", count: 1 })
  };

  decrement = () => {
    store.dispatch({ type: "", count: -1 })
  };
  render () {
    return(
      <div className="App">
        <Header count={this.store.getState}/>
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          count={this.store.getState}
          />
      </div>
    );
  }
}

export default App;
