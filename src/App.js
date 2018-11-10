import React, { Component } from "react";
import "./App.css";
import Tickersfew from "./components/Tickersfew";
import CurrencyGroupPair from "./components/currencyConverter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src="./SHARPR.png" alt="SHARPR LOGO" />
        </div>
        <Tickersfew />
        <CurrencyGroupPair />
      </div>
    );
  }
}

export default App;
