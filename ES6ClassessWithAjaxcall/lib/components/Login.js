import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class LoginPage extends Component {
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
                        <input type="text" className="form-control" placeholder="Email" required autofocus />
                        <input type="password" className="form-control" placeholder="Password" required />
                        <button className="btn btn-primary btn-block" type="submit" >
                            Sign in</button>
                          <label className="checkbox pull-left remember-me">
                            <input type="checkbox" value="signed-in" />
                            Stay signed in
                        </label>
                        <a href="#" className="pull-right need-help">Forgot password? </a><span className="clearfix"></span>
                        </form>
                    </div>
                    <a href="/create-account" className="btn btn-primary btn-block create-account">Create an Account</a>
                </div>
            </div>
            <footer>
              <div class="container">
               <div class="col-md-12">
                  <p className="text-small">Copyright Integrated Auction Solutions, LLC</p>
                </div>
              </div>
             </footer>
        </div>
      </DocumentTitle>
    );
  }
}
