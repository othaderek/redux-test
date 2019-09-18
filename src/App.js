import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Counter from './Counter';
import { createStore } from 'redux';

console.log(createStore);
// createStore( reducer, preloadedState, enhancer)
const store = createStore((prevState, nextState) => {

});
debugger

// redux to manage this: {count: 0}

class App extends React.Component {

  // state = {
  //   count: 0
  // }

  increment = () => {
    // this.setState( prevState => ({ count: prevState.count + 1}));
  };

  decrement = () => {
    // this.setState( prevState => ({ count: prevState.count - 1}));
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
