import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class AccountInfo extends Component {
  render() {
    return (
        <div>
            <div className="row register-section">
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
        </div>
    );
  }
}
