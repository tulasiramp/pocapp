import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import Home from '../components/Home'
import Search from '../components/Search'
import Vehicles from '../components/Vehicles'
import Login from '../components/Login'
import Watchlist from '../components/Watchlist'
import Status from '../components/Status'
import Register from '../components/Register'
import Landing from '../components/Landing'
import Error from '../components/Error'

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/vehicles" component={Vehicles} />
    <Route path="/login" component={Login} />
    <Route path="/watchlist" component={Watchlist} />
    <Route path="/status" component={Status} />
    <Route path="/register" component={Register} />
    <Route path="/landing" component={Landing} />
    <Route path="*" component={Error} />
  </Route>
)
