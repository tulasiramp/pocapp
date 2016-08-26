import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class LocationCard extends Component {
  render() {
    return (
      <div className="location-card">
        <div className="header">
          <div className="heading">
            <span id="header_title">Dealership Name</span>
          </div>
        </div>
        <div className="location-image">
          <img src="static/images/Vehicle_Image.png" />
        </div>
        <div className="location-content">
          <span className="location-vehicle-count"> <span className="fa fa-car"></span> 605 Vehicles</span>
          <hr/>
          <span>Distance: </span>
        </div>
        <div className="location-card-footer">
          <ul className="action-buttons">
            <li className="action-btn"><a href=""><span className='fa fa-info' ></span><span>Details</span></a></li>
            <li className="action-btn"><a href=""><span className='fa fa-search' ></span><span>Search</span></a></li>
          </ul>
        </div>
      </div>
    );
  }
}
