import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Counter from './Counter'

class App extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    console.log("hi");
    this.setState( prevState => ({ count: prevState.count + 1}));
  };

  decrement = () => {
    this.setState( prevState => ({ count: prevState.count - 1}));
  };
  render () {
    return(
      <div className="App">
        <Header count={this.state.count}/>
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          count={this.state.count}
          />
      </div>
    );
  }
}

export default App;
