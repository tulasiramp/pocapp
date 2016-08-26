import React, { Component, PropTypes } from 'react'

export default class SearchNav extends Component {
  render() {
    return (
      <div className="search-nav">
      	<div className="container-fluid">
          <ul className="nav navbar-nav pull-left">
            <li><a href="#">Filters <span className="fa fa-sliders"></span></a></li>
      		 </ul>
      		<div className="search-title">
      			<h4>Search</h4>
      		</div>
          <ul className="nav navbar-nav status-links">
            <li className="active"><a href="#">Vehicles</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
          <ul className="nav navbar-nav pull-right search-nav-right">
            <li><a href="#">Search History <span className="fa fa-history"></span></a></li>
            <li><a href="#">Recently Viewed <span className="fa fa-car"></span></a></li>
      		 </ul>
      	</div>
      </div>
    );
  }
}
