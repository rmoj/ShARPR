import React, { Component } from "react";
import axios from "axios";
import Cryptocurrency from "./Cryptocurrency";

import "./Tickers.css";

class Tickersfew extends Component {
  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        var wanted = [
          "bitcoin",
          "ethereum",
          "litecoin",
          "bitcoin-cash",
          "ethereum-classic"
        ];
        var result = response.data.filter(currency =>
          wanted.includes(currency.id)
        );
        //
        // const result = response.data;
        // console.log(result);
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
    data: [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        price_usd: "1",
        percentage_change_1h: "0",
        percentage_change_24h: "0",
        percentage_change_7d: "0"
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        price_usd: "1",
        percentage_change_1h: "0",
        percentage_change_24h: "0",
        percentage_change_7d: "0"
      },
      {
        id: "litecoin",
        name: "Litecoin",
        symbol: "LTC",
        price_usd: "1",
        percentage_change_1h: "0",
        percentage_change_24h: "0",
        percentage_change_7d: "0"
      },
      {
        id: "bitcoin-cash",
        name: "Bitcoin Cash",
        symbol: "BCH",
        price_usd: "1",
        percentage_change_1h: "0",
        percentage_change_24h: "0",
        percentage_change_7d: "0"
      },
      {
        id: "ethereum-classic",
        name: "Ethereum Classic",
        symbol: "ETC",
        price_usd: "1",
        percentage_change_1h: "0",
        percentage_change_24h: "0",
        percentage_change_7d: "0"
      }
    ]
  };

  render() {
    var tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ));

    return (
      <div className="tickers-containers">
        <ul className="tickers">{tickers}</ul>
        <p>Information takes 1 minute to fetch</p>
      </div>
    );
  }
}

export default Tickersfew;
