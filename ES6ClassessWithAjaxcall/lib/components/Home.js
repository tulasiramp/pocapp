import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import OwlCarousel from 'react-owl-carousel'
import Vehicle from '../components/Vehicle'
import Event from '../components/Event'
import Location from '../components/Location'

export default class Home extends Component {
  render() {
    return (
      <DocumentTitle title={`Home`}>
        <div>
          <div className="buyer-dashboard-header">
            <div className="buyer-dashboard-header-overlay">
              <div className="container-fluid buyer-dashboard-header-stats">
                <div className="row">
                  <div className="col-md-4">
                    <a href=""><span className="stat-number">2,000</span><span className="stat-text">Vehicles</span></a>
                  </div>
                  <div className="col-md-4">
                    <a href=""><span className="stat-number">11</span><span className="stat-text">Events</span></a>
                  </div>
                  <div className="col-md-4">
                    <a href=""><span className="stat-number">11</span><span className="stat-text">Locations</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid user-dashboard">
            <div className="row">
              <div className="col-md-12">
                <h4>Recently Added</h4>
                  <OwlCarousel slideSpeed={300} navigation>
                  </OwlCarousel>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Events</h4>
                  <OwlCarousel slideSpeed={300} navigation >
                    <div><Event /></div>
                      <div><Event /></div>
                        <div><Event /></div>
                          <div><Event /></div>
                            <div><Event /></div>
                              <div><Event /></div>
                                <div><Event /></div>
                                  <div><Event /></div>
                  </OwlCarousel>

              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4>Locations</h4>
                  <OwlCarousel slideSpeed={300} navigation >
                    <div><Location /></div>
                      <div><Location /></div>
                        <div><Location /></div>
                          <div><Location /></div>
                            <div><Location /></div>
                              <div><Location /></div>
                                <div><Location /></div>
                                  <div><Location /></div>
                                    <div><Location /></div>
                  </OwlCarousel>

              </div>
            </div>
          </div>
      </div>
      </DocumentTitle>
    );
  }
}
