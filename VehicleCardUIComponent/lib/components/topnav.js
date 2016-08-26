import React from 'react';

export default class Dropdown extends React.Component{
	render(){
		return(
		<div className="dropdown-menu">
		<i className="fa fa-caret-up"></i>
		<ul className="br-list1">
     <li><a href="#">Vehicles</a></li>
     <li><a href="#">Events</a></li>
			 <li><a href="#">Locations</a></li>
				 <li><a href="#">Recently Added</a></li>
     </ul>
     <ul className="br-list2">
			 <li><a href="#">Watchlist</a></li>
       <li><a href="#">Wishlists</a></li>
       <li><a href="#">Recently Viewed</a></li>
       <li><a href="#">Search History</a></li>
     </ul>
		</div>
		);
	}
};
export default class TopNav extends React.Component{
    render(){
      return(
			<div className="top-nav">
				<div className="container">
					<div className="col-md-12">
							 <img className="pull-left logo" src="/static/images/autobahnLogo.png"/>
							 <h4 className="pull-left">Marketplace</h4>
							 <ul className="nav navbar-nav pull-left">
								 <li><a href="#" id="dropdown-hover">Buy <i className="fa fa-caret-down"></i></a></li>
								 <li><a href="#">Sell</a></li>
							 </ul>
						<div className="pull-right">
							<form className="navbar-form pull-left top-nav-search">
 							<input type="text" placeholder="Search All" className="form-control search"/><i className="fa fa-search"></i>
 							</form>
 						 <ul className="nav navbar-nav pull-left">
 							 <li><a href="#">Status <span className="fa fa-heartbeat"></span></a></li>
 							 <li><a href="#">Help <span className="fa fa-question-circle"></span></a></li>
 							 <li><a href="#">Brandon <span className="fa fa-cog"></span></a></li>
 						  </ul>
						</div>
					</div>
				</div>
				</div>
        );
    }
};
