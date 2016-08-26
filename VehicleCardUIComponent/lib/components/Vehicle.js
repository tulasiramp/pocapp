import React from 'react';
import DocumentTitle from 'react-document-title'

export default class VehicleCardUIComponent extends React.Component{
    render(){
        return(
               <div className="vehicle-card">
                 <div className="header">
                   <div className='heading' >
                        <span id="header_title">2011 CHEVROLET CORVETTE PREMIUM L</span>
                    </div>
                 </div>
                 <div className="vehicle-image">
                  <img src="static/images/Vehicle_Image.png"/> 
                  <div id="img-wrap">
                     <div id="vehicle_number">#10032</div>
                     <div className="cr-button"><button type = "button" id="cr_botton" value = "submit">CR</button></div>
                  </div>
                 </div>
                 <div className="v_details">
                     <span id="buy"> Buy:<span id="buynow"><b>$48,800</b></span></span>
                     <span id="highBid">High Bid:<span id="highid"><b>$39,100</b></span></span> <br/>
                     <span id="miles"><b>Miles:</b> <span id="miles_distance"><b>5,375</b></span></span>
                     <span id="vehicle_color">Color: <span id="colorid">Red/Grey</span></span><br/>
                     <span id="seller">Seller: <span id="vehicle_seller">GM Financial</span></span><br/>
                     <span id="duration">Ends in 4d 2hrs</span>
                 </div>
                 <div className= "vehicle-card-actions">
                    <div className="v_bottom">
                     <span className="v-watchlist"><span className='fa fa-eye'><br/><span id="watchlist"><a href="">Watchlist</a></span></span></span>
                     <span className="v-wishlist"><span className='fa fa-list'><br/><span id="wishlist"><a href="">Wishlists</a></span></span></span>
                     <span className="v-bid"><span className='fa fa-money' id="money"><br/><span id="bid"><a href="">Bid/Buy</a></span></span></span>
                    </div>
                 </div>
               </div>
        );
    }
};
