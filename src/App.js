import React, { Component } from "react";
import "./App.css";
import Details from './components/Details/Details';
import Tickersfew from "./components/Tickersfew";
import CurrencyGroupPair from "./components/currencyConverter";


class App extends Component {

  //state = { coin: '' }
  coin = 'BTC';

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src="./SHARPR.png" alt="SHARPR LOGO" />
        </div>
        <Tickersfew />
        <CurrencyGroupPair />
        <Details coin={this.coin} />
        {/* change to this.state.coin */}
      </div>
    );
  }
}

export default App;
