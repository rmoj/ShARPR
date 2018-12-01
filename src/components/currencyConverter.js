import React, { Component } from 'react';
import './currencyConverter.css';
import Navbar from './Navbar.js';

const PATH_BASE = 'https://free.currencyconverterapi.com/api/v6';
const PATH_CURRENCIES = '/currencies';
// const PATH_CONVERT = '/convert';
// const PARAM_CONVERT = 'q=';
// const PARAM_COMPACT = 'compact=y';

class AmountInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <input
          type="number"
          className="amount"
          value={this.props.value}
          onChange={event => this.props.convert(this.props.position, event)}
        />
      </span>
    );
  }
}

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span>
        <select
          className="currencySelector"
          value={this.props.selected_currency}
          onChange={event =>
            this.props.recordCurrency(this.props.position, event)
          }
        >
          {this.props.currencies.map(item => (
            <option key={item.id} value={item.id}>
              {item.currencyName}
            </option>
          ))}
        </select>
      </span>
    );
  }
}

class CurrencyGroup extends Component {
  render() {
    return (
      <div className="currency">
        <AmountInput
          value={this.props.value}
          convert={this.props.convert}
          position={this.props.position}
        />
        <CurrencySelector
          currencies={this.props.currencies}
          recordCurrency={this.props.recordCurrency}
          selected_currency={this.props.selected_currency}
          position={this.props.position}
        />
      </div>
    );
  }
}

class CurrencyGroupPair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Array(2).fill(0),
      exchange_rate: 1,
      all_currencies: [],
      currencies: ['ALL', 'ALL']
    };

    fetch(`${PATH_BASE}${PATH_CURRENCIES}`)
      .then(response => response.json())
      .then(myJson => this.importCurrencies(myJson.results));

    this.convert = this.convert.bind(this);
    this.importCurrencies = this.importCurrencies.bind(this);
    this.recordCurrency = this.recordCurrency.bind(this);
    this.getExchangeRate = this.getExchangeRate.bind(this);
    this.updateExchangeRate = this.updateExchangeRate.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  getExchangeRate(source, destination) {
    // let searchTerm = source + "_" + destination;
    // let url = `${PATH_BASE}${PATH_CONVERT}?${PARAM_CONVERT}${searchTerm}&${PARAM_COMPACT}`;
    // https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP&compact=y
    let url =
      'https://free.currencyconverterapi.com/api/v6/convert?q=' +
      source +
      '_' +
      destination +
      '&compact=y';

    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data_response =>
        this.updateExchangeRate(data_response, source, destination)
      );
  }

  updateExchangeRate(message, source, destination) {
    console.log(message);
    this.setState({
      exchange_rate: message[source + '_' + destination]['val']
    }); // update existing values based on new exchange rate
    var value1 = this.state.value[0];
    var value2 = this.state.value[1];
    value2 = value1 * this.state.exchange_rate;
    this.setState({ value: [value1, value2] });
    console.log('value2: ' + value2);
    console.log('value1: ' + value1);
    console.log('rate: ' + this.state.exchange_rate);
    console.log(this.state.exchange_rate);
  }

  fetchCurrencies() {
    fetch(`${PATH_BASE}${PATH_CURRENCIES}`)
      .then(response => response.json())
      .then(myJson => this.importCurrencies(myJson.results));
  }

  importCurrencies(currencies) {
    var downloaded_currencies = [];
    for (var x in currencies) {
      downloaded_currencies.push(currencies[x]);
    }
    this.setState({ all_currencies: downloaded_currencies });
    this.setState({
      currencies: [this.state.currencies[0], this.state.currencies[1]]
    });
  }

  convert(position, event) {
    if (position === 0) {
      var value1 = event.target.value;
      var value2 = value1 * this.state.exchange_rate;
    }
    if (position === 1) {
      var value2 = event.target.value;
      var value1 = value2 / this.state.exchange_rate;
      console.log('value1: ' + value1 + ',value2: ' + value2);
    }
    this.setState({ value: [value1, value2] });
  }

  recordCurrency(position, event) {
    console.log(position + ' ' + event.target.value);
    var currency = event.target.value;
    var currencies = this.state.currencies;
    currencies[position] = currency;
    this.setState({ currencies: currencies });

    //     update the state of exchange rate
    this.getExchangeRate(this.state.currencies[0], this.state.currencies[1]);
  }

  render() {
    return (
      <div className="currency">
        <Navbar />
        {/* position parameter helps differentiate who is the top and who is the bottom group*/}
        <hr />
        <h1>CURRENCY CONVERTER</h1>
        <CurrencyGroup
          value={this.state.value[0]}
          convert={this.convert}
          currencies={this.state.all_currencies}
          recordCurrency={this.recordCurrency}
          position={0}
          selected_currency={this.state.currencies[0]}
        />
        <CurrencyGroup
          value={this.state.value[1]}
          convert={this.convert}
          currencies={this.state.all_currencies}
          recordCurrency={this.recordCurrency}
          position={1}
          selected_currency={this.state.currencies[1]}
        />
      </div>
    );
  }
}

export default CurrencyGroupPair;
