import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class Error extends Component {
  render() {
    return (
      <DocumentTitle title={`Page Not Found`}>
        <div>
          <div className="container">
            <h3>404: Page Not Found</h3>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
