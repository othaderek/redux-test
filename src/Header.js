import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    return(
      <div>
        <h1>The count is {this.props.count}</h1>
      </div>
    );
  }
}

export default Header;
