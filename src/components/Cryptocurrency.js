import React, { Component } from "react";
// import { className } from "postcss-selector-parser";
import "./Cryptocurrency.css";

class Cryptocurrency extends Component {
  render() {
    var {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d
    } = this.props.data;
    return (
      <li className={"cryptocurrency " + id}>
        <p className="cryptocurrency-name">
          {name} ({symbol})
        </p>
        <h2>$ {(+price_usd).toFixed(2)}</h2>
        <p> {percent_change_1h}% 1hr</p>
        <p> {percent_change_24h}% 24hr</p>
        <p> {percent_change_7d}% 7days</p>
      </li>
    );
  }
}

export default Cryptocurrency;
