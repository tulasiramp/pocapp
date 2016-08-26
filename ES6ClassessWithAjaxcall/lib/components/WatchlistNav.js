import React, { Component, PropTypes } from 'react'

export default class WatchlistNav extends Component {
  render() {
    return (
      <div className="watchlist-nav">
      	<div className="container-fluid">
      		<div className="watchlist-title">
      			<h4>Watchlist</h4>
            <p>21 Vehicles</p>
      		</div>
          <div className="pull-right">
            Sort by:
            <select className="sort-select">
              <option>Miles</option>
              <option>Year</option>
              <option>Run #</option>
            </select>
          </div>
      	</div>
      </div>
    );
  }
}
