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

const firstFunction = (firstArg, secondArg) => {
  console.log('firstFunction arg: ', firstArg);
  console.log('secondArg: ', secondArg);
}

const secondFunction = (firstArg, secondArg) => {
  console.log('firstFunction arg: ', firstArg);
  console.log('secondArg: ', secondArg );

}

export default connect(firstFunction, secondFunction)(Header)
