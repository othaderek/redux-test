import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends React.Component {

  render () {
    return(
      <div>
        <h1>The count is {this.props.count}</h1>
      </div>
    );
  }
}

// First argument is always state/store
// Second argument is always props.
// THIS IS MY GETTER FOR REDUX FOR A COMPONENT
const mapStateToProps = (store, props) => {
  console.log('store: ', store);
  console.log('props: ', props);
  return {count: store.count}
}

// THIS IS MY SETTER FOR REDUX FOR A COMPONENT
const mapDispatchToProps = (dispatch, props) => {
  console.log('firstFunction arg: ', dispatch);
  console.log('props: ', props );

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
