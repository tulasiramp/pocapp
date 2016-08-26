import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class Landing extends Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-md-offset-4 login-logo">
              <img src="static/images/autobahn.png" alt="Autobahn Logo"/>
              </div>
           </div>
           <div className="row login-section">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h4 className="text-center login-title">Sign in to your IAS Account</h4>
                    <div className="account-wall">
                        <form className="form-signin">
                        <button className="btn btn-primary btn-block" type="submit" >Sign in</button>
                        </form>
                    </div>
                    <a href="/register" className="btn btn-primary btn-block create-account">Create an Account</a>
                </div>
            </div>
            <footer>
              <div class="container">
               <div class="col-md-12">
                  <p className="text-small">&copy; 2016 Copyright Integrated Auction Solutions, LLC</p>
                </div>
              </div>
             </footer>
        </div>
      </DocumentTitle>
    );
  }
}
