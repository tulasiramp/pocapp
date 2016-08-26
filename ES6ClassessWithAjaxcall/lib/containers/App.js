import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import TopNav from '../components/TopNav'
import { resetErrorMessage } from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(nextValue) {
    browserHistory.push(nextValue)
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <TopNav {...this.props} onChange={this.handleChange} />
        {children}
      </div>
    )
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  children: PropTypes.node,
  query: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1),
    query: ownProps.location.query
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
