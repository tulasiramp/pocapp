import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import StatusNav from '../components/StatusNav'

export default class Status extends Component {
  render() {
    return (
      <DocumentTitle title={`Status Tracker`}>
        <div>
          <StatusNav />
          <div className="container-fluid">
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
