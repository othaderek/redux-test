import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  render () {
    return(
      <div className="Counter">
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
