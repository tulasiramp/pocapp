import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class Register extends Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div>
          <div className="login-header">
          </div>
          <div className="container">
            <div className="row login-section">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h4 className="text-center login-title">Create IAS Account</h4>
                    <div className="account-wall">
                        <form className="form-signin">
                        <input type="text" className="form-control" placeholder="Email" required />
                        <input type="password" className="form-control" placeholder="Password" required />
                        <input type="password" className="form-control" placeholder="Repeat Password" required />
                        <button className="btn btn-primary btn-block" type="submit" >Next</button>
                        </form>
                    </div>
                </div>
            </div>
              <div className="row login-section">
                  <div className="col-sm-6 col-md-4 col-md-offset-4">
                      <h4 className="text-center login-title">Account Information</h4>
                      <div className="account-wall">
                          <form className="form-signin">
                            <input type="text" className="form-control" placeholder="First Name" required />
                            <input type="text" className="form-control" placeholder="Last Name" required />
                            <input type="text" className="form-control" placeholder="Address" required />
                            <input type="text" className="form-control" placeholder="City" required />
                            <input type="text" className="form-control" placeholder="State" required />
                            <input type="text" className="form-control" placeholder="Zip" required />
                            <button className="btn btn-primary btn-block" type="submit" >Next</button>
                          </form>
                      </div>
                  </div>
              </div>
            <div className="row login-section">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h4 className="text-center login-title">Add You AuctionACCESS Account</h4>
                    <div className="account-wall">
                      <form className="form-signin">
                      <input type="text" className="form-control" placeholder="AuctionACCESS #" required />
                      <input type="password" className="form-control" placeholder="Last 4 of Gvt ID" required />
                      <button className="btn btn-primary btn-block" type="submit" >Add Account</button>
                      <a href="#" className="skip-section" >Skip</a>
                      </form>
                    </div>
                </div>
            </div>
            <div className="row login-section">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h4 className="text-center login-title">Add Your AWG Simulcast Account</h4>
                    <p>By adding your Simulcast account, you can bid on live auction vehicles running in the Marketplace.</p>
                    <div className="account-wall">
                      <form className="form-signin">
                      <input type="text" className="form-control" placeholder="Username" required />
                      <input type="password" className="form-control" placeholder="Password" required />
                      <button className="btn btn-primary btn-block" type="submit" >Add Account</button>
                        <a href="#" className="skip-section" >Skip</a>
                      </form>
                    </div>
                </div>
            </div>
            </div>
          </div>
       </DocumentTitle>
    );
  }
}
