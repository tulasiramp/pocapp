import React, { Component, PropTypes } from 'react'

export default class VehiclesNav extends Component {
  render() {
    return (
      <div className="search-nav">
      	<div className="container-fluid">
      		<div className="search-title">
      			<h4>Vehicles</h4>
      		</div>
      		<ul className="nav navbar-nav pull-right search-nav-right">
      			<li><a href="#">Filters <span className="fa fa-sliders"></span></a></li>
            <li className="dropdown">
      				<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">History <span className="fa fa-history"></span></a>
      				<ul className="dropdown-menu">
      					<li><a href="#">Recently Viewed</a></li>
      					<li><a href="#">Search History</a></li>
      				</ul>
      			</li>
      		 </ul>
      	</div>
      </div>
    );
  }
}
