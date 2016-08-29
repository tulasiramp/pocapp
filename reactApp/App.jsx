import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         Vehicle1: []
      };
   }

   componentWillMount() {

      var xhr = new XMLHttpRequest();
      // xhr.open('get', 'https://api.myjson.com/bins/z12t', true);
      // xhr.open('get', 'https://api.myjson.com/bins/49437', true);
      //xhr.open('get', 'https://api.myjson.com/bins/4deer', true);
     // xhr.open('get', 'http://183.82.3.51:94/api/NfcDetails', true);

      xhr.open('get', 'https://api.myjson.com/bins/3z1fn', true);

      xhr.onload = function () {
         var data = JSON.parse(xhr.responseText);
         console.log(data);
         this.setState({Vehicle1: data.Vehicle1});

      }.bind(this);

      xhr.send();
   }

   componentWillUnmount() {
      this.serverRequest.abort();
   }

   render() {
      return (
          <div>
             <h1>Header</h1>
             <h2>Content</h2>
             <div className="container-fluid">
                <img src={this.state.Vehicle1.image}/><br/>
                <span>Buynow:{this.state.Vehicle1.buynow}</span><br/>
                <span>HighBid:{this.state.Vehicle1.vehicle_id}</span> <br/>
                <span>Mailes:{this.state.Vehicle1.miles}</span> <br/>
                <span>Color:{this.state.Vehicle1.color}</span><br/>
                <span>Seller:{this.state.Vehicle1.seller}</span><br/>
                <span>Duration:{this.state.Vehicle1.duration}</span>
             </div>
          </div>
      );
   }
}

export default App;
