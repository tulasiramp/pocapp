import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class Vehicle extends Component {
    constructor(props) {
      super(props)

    }

    componentWillMount() {

    }
    render() {
    return(
      <div className="vehicle-card">
        <div className="header">
          <div className="heading">
            <a href="" id="header_title">{this.props.vehicleData.year} {this.props.vehicleData.make} {this.props.vehicleData.model} {this.props.vehicleData.bodyStyle}</a>
          </div>
        </div>
        <div className="vehicle-image">
          <a href="#" className="cr-button">CR</a>
          <span className="lot-number">{this.props.vehicleData.lotNumber}</span>
          <img data-qa="poster"
            src={this.props.vehicleData.mainImage}
            onError={(e)=>{e.target.src='https://placeholdit.imgix.net/~text?w=240&h=170'}} />
        </div>
        <div className="vehicle-card-content">
          <span className="vehicle-miles"> <span className="fa fa-dashboard"></span> {this.props.vehicleData.mileage} Mi</span>    <span className="vehicle-buy-now"><span className="fa fa-money"></span> $48,800</span>
          <hr/>
          <span>Seller: <span>{this.props.vehicleData.sellerName}</span></span><br/>
          <span>Ends in 4d 2hrs</span>
        </div>
        <div className="vehicle-card-footer">
          <ul className="action-buttons">
            <li className="action-btn"><a href=""><span className='fa fa-eye' ></span><span>Watchlist</span></a></li>
            <li className="action-btn"><a href=""><span className='fa fa-list' ></span><span>Wishlists</span></a></li>
            <li className="action-btn"><a href=""><span className='fa fa-money' ></span><span>Bid/Buy</span></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

Vehicle.propTypes = {
  vehicleData: React.PropTypes.shape({
      year: React.PropTypes.number.isRequired,
      make: React.PropTypes.string.isRequired,
      model: React.PropTypes.string.isRequired,
      bodyStyle: React.PropTypes.string.isRequired
  })
}
