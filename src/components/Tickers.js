import React, { Component } from "react";
import axios from "axios";
import Cryptocurrency from "./Cryptocurrency";

import "./Tickers.css";

class Tickers extends Component {
  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        // var wanted = ["bitcoin", "ethereum", "litecoin"];
        // var result = response.data.filter(currency =>
        //   wanted.includes(currency.id)
        // );
        //
        const result = response.data;
        console.log(result);
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      60 * 1000
    ); //10*1000 = 10sec
  }

  state = {
    data: []
  };

  render() {
    var tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ));

    return (
      <div className="tickers-containers">
        <ul className="tickers">{tickers}</ul>
        <p>Information takes 1 minute to fetch (All prices shown in USD)</p>
      </div>
    );
  }
}

export default Tickers;
