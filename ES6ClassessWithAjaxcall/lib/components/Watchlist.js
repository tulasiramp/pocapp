import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import WatchlistNav from '../components/WatchlistNav'

export default class Watchlist extends Component {
  render() {
    return (
      <DocumentTitle title={`Watchlist`}>
        <div>
          <WatchlistNav />
          <div className="container-fluid">
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
