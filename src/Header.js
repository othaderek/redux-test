import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends React.Component {

  render () {
    return(
      <div>
        <h1>The count is {null}</h1>
      </div>
    );
  }
}

// First argument is always state/store
// Second argument is always props.

const firstFunction = (state, props) => {
  console.log('state: ', state);
  console.log('props: ', props);
  return {count: state.count}
}

const secondFunction = (firstArg, secondArg) => {
  // console.log('firstFunction arg: ', firstArg);
  // console.log('secondArg: ', secondArg );

}

export default connect(firstFunction, secondFunction)(Header)
