import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import VehiclesNav from '../components/VehiclesNav'

export default class Vehicles extends Component {
   constructor(props) {
      super(props)
           this.state = {
           NfcDetails: []
    };
    }
    componentWillMount() {

    var xhr = new XMLHttpRequest();
    // xhr.open('get', 'https://api.myjson.com/bins/z12t', true);
    // xhr.open('get', 'https://api.myjson.com/bins/49437', true);
    //xhr.open('get', 'https://api.myjson.com/bins/4deer', true);
    //xhr.open('get', 'https://api.myjson.com/bins/3z1fn', true);
    xhr.open('get', 'http://183.82.3.51:94/api/NfcDetails', true);

    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      this.setState({NfcDetails: data.NFCCheckID});
  
    }.bind(this);

    xhr.send();
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
     <DocumentTitle title={`Vehicles`}>
        <div>
          <VehiclesNav />
          <div className="container-fluid">    
          <span>BuldingId:{this.state.NfcDetails.BuldingId}</span> 
          <span>ReachedDate:{this.state.NfcDetails.ReachedDate}</span> <br/>
          <span>SGuardName:{this.state.NfcDetails.SGuardName}</span> <br/>
          
           </div>
        </div>
      </DocumentTitle>
    )
  }
}

