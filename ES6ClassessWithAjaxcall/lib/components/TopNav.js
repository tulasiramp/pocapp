import React, { Component, PropTypes } from 'react'

export default class TopNav extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)

		this.state = {
			query: this.props.location.query.q || ''
		}
	}

	handleClick(e) {
		e.preventDefault()

		if (this.props.location.pathname == '/search') {
			this.setState({ query: '' })
		}

		let url = e.target.getAttribute('href') || '/'
		this.props.onChange(url)
	}

	handleSearch(e) {
		this.props.onChange(`/search?q=${this.refs.searchInput.value}`)
	}

	handleKeyDown(e) {
		if (e.keyCode === 13) {
			e.preventDefault()
			this.handleSearch()
		}
	}

	handleInputChange(e) {
		this.setState({
			query: this.refs.searchInput.value
		})
	}

	queryStringFromObject(query) {
		var parts = []
		Object.keys(query).forEach(function(key) {
			parts.push(`${key}=${query[key]}`)
		})
		return parts.join('&')
	}

	render() {
		return (
			<div className="top-nav">
				<div className="container-fluid">
					<a href="/" onClick={this.handleClick}>
						<img className="pull-left logo" src="/static/images/autobahnLogo.png"/>
						<h4 className="pull-left">Marketplace</h4>
					</a>
					<ul className="nav navbar-nav pull-left main-nav">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Buy <span className="caret"></span></a>
						<ul className="dropdown-menu">
							<li><a href="/vehicles" onClick={this.handleClick}>Vehicles</a></li>
							<li><a href="#">Events</a></li>
							<li><a href="#">Locations</a></li>
							<li role="separator" className="divider"></li>
							<li><a href="/watchlist" onClick={this.handleClick}>Watchlist</a></li>
							<li><a href="#">Recently Viewed</a></li>
							<li><a href="#">Search History</a></li>
						</ul>
					</li>
						<li><a href="#">Sell</a></li>
						</ul>
					<div className="pull-right">
						<form className="navbar-form pull-left top-nav-search">
							<div className="input-group">
      					<input
									type="text"
									className="form-control"
									placeholder="Search"
									onKeyDown={this.handleKeyDown}
									onChange={this.handleInputChange}
									ref="searchInput"
									value={this.state.query}
								/>
								<span className="input-group-btn">
									<button
										className="btn btn-default"
										type="button"
										onClick={this.handleSearch}>
										<span className="fa fa-search"></span>
									</button>
								</span>
    					</div>
						</form>
						<ul className="nav navbar-nav pull-left user-nav">
							<li><a href="/status" onClick={this.handleClick}>Status <span className="fa fa-heartbeat"></span></a></li>
							<li className="dropdown">
 								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Help <span className="fa fa-question-circle"></span></a>
 								<ul className="dropdown-menu">
 									<li><a href="#">Support Portal</a></li>
 									<li><a href="#">Tour</a></li>
 									<li><a href="#">Videos</a></li>
 								</ul>
 							</li>
 							<li className="dropdown">
 								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Brandon <span className="fa fa-cog"></span></a>
 								<ul className="dropdown-menu">
 									<li><a href="#">Settings</a></li>
 									<li><a href="/login" onClick={this.handleClick}>Logout</a></li>
 								</ul>
 							</li>
							<li><a href="#"><span className="fa fa-gavel"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

TopNav.propTypes = {
	onChange: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired
}
