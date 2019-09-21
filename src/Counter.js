import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
const firstFunction = (firstArg, secondArg) => {
  console.log('firstFunction arg: ', firstArg);
  console.log('secondArg: ', secondArg);
}

const secondFunction = (firstArg, secondArg) => {
  console.log('firstFunction arg: ', firstArg);
  console.log('secondArg: ', secondArg );

}

export default connect(firstFunction, secondFunction)(Counter);
