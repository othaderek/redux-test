import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends React.Component {

  increment = () => {
    this.props.incrementCount();
  }
  decrement = () => {
    this.props.decrementCount();
  }

  render () {
    return(
      <div className="Counter">
      <button onClick={this.props.increment}>+</button>
      <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (store, props) => {
  // console.log('store: ', store);
  // console.log('props: ', props);
  return {count: store.count}
}

// THIS IS MY SETTER FOR REDUX FOR A COMPONENT
const mapDispatchToProps = (dispatch, props) => {
  // console.log('firstFunction arg: ', dispatch);
  // console.log('props: ', props );
  return {
    incrementCount: () => {
      dispatch({ type: "INCREMENT_COUNT", count: 1 })
    },
    decrementCount: () => {
      dispatch({ type: "DECREMENT_COUNT", count: 1})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
