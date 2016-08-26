import React, { Component, PropTypes } from 'react'

export default class StatusNav extends Component {
  render() {
    return (
      <div className="status-nav">
      	<div className="container-fluid">
      		<div className="status-title">
      			<h4>Status Tracker</h4>
      		</div>
          <ul className="nav navbar-nav status-links">
            <li className="active"><a href="#">Bids</a></li>
            <li><a href="#">Purchases</a></li>
            <li><a href="#">Ifs</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
          <div className="pull-right">
            Accounts:
            <select className="account-select">
              <option>All</option>
              <option>Buyer 1</option>
            </select>
          </div>
      	</div>
      </div>
    );
  }
}
