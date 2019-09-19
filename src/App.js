import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Counter from './Counter';
import { createStore } from 'redux';

class App extends React.Component {
  //
  // increment = () => {
  //   store.dispatch({ type: "INCREMENT_COUNT", count: 1})
  // };
  //
  // decrement = () => {
  //   store.dispatch({ type: "DECREMENT_COUNT", count: 1})
  // };
  render () {
    return(
      <div className="App">
        <Header />
        <Counter
          increment={null}
          decrement={null}
          />
      </div>
    );
  }
}

export default App;
