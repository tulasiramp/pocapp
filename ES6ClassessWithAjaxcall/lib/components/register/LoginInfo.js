import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class LoginInfo extends Component {
  render() {
    return (
        <div>
            <div className="row register-section">
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
        </div>
    );
  }
}
