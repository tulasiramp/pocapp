import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class EventCard extends Component {
  render() {
    return (
       <div className="event-card">
         <div className="header">
           <div className='heading'>
                <span>Event Name Featuring Dan Tobin Chevrolet</span>
            </div>
         </div>
         <div className="event-image">
          <img src="static/images/Vehicle_Image.png" />
         </div>
         <div className="event-content">
             <span className="event-vehicles"> <span className="fa fa-car"></span> 125 Vehicles</span>
             <hr/>
               <span>Seller: <span>GM Financial</span></span><br/>
                <span> Event Begins</span>
         </div>
         <div className="event-card-footer">
            <ul className="action-buttons">
              <li className="action-btn"><a href=""><span className='fa fa-search' ></span><span>Search</span></a></li>
              <li className="action-btn"><a href=""><span className='fa fa-list' ></span><span>Runlist</span></a></li>
            </ul>
         </div>
       </div>
    );
  }
}
