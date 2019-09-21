import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends React.Component {


  render () {
    return(
      <div className="Counter">
      <button onClick={this.props.incrementCount}>+</button>
      <button onClick={this.props.decrementCount}>-</button>
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
