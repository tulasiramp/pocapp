import React from 'react'
import DocumentTitle from 'react-document-title'
import { TopNav, Vehicle } from '../components'

export default class Home extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Home`}>
        <div className="container">
          <h4>Recently Added</h4>
          <hr />
          <Vehicle />
        </div>
      </DocumentTitle>
    );
  }
}
