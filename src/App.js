import React, { Component } from "react";
import "./App.css";
import Tickersfew from "./components/Tickersfew";
import CurrencyGroupPair from "./components/currencyConverter";
import { isNullOrUndefined } from "util";

class App extends Component {
state={
  data:null
};

componentDidMount(){
  //call fetch function below once the component mount
  this.callBackendAPI().then(res=>this.setState({data:res.express})).catch(err=>console.log(err))
}

// Fetches our GET route from the Express Server.

callBackendAPI = async()=>{
  const response = await fetch('/express_backend');
  const body = await response.json()

  if(response.status !==200){
    throw Error(body.message)
  }
  return body
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src="./SHARPR.png" alt="SHARPR LOGO" />
        </div>
        <header>
          // Render the newly fetched data inside of this.state.data
          <p className="App-intro">{this.state.data}</p>
        </header>
        <Tickersfew />
        <CurrencyGroupPair />
      </div>
    );
  }
}

export default App;
