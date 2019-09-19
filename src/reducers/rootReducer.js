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

export default (state = defaultState, action) => {
  console.log("state: ", state);
  console.log("action: ", action);

  switch (action.type) {
    case "INCREMENT_COUNT":
      return {count: state.count + action.count };
    case "DECREMENT_COUNT":
      return {count: state.count - action.count};
    default:
      return state
  }
}
