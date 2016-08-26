import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class SimulcastLogin extends Component {
  render() {
    return (
        <div>
            <div className="row register-section">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h4 className="text-center login-title">Add You AWG Simulcast Account</h4>
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
    );
  }
}
