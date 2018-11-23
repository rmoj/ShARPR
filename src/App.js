<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import Details from './components/Details/Details';
import Tickersfew from "./components/Tickersfew";
import CurrencyGroupPair from "./components/currencyConverter";
=======
import React, { Component } from 'react';
import './App.css';
import Tickersfew from './components/Tickersfew';
import CurrencyGroupPair from './components/currencyConverter';

import {
  Button,
  Container,
  Header,
  Icon,
  Menu
} from 'semantic-ui-react/dist/commonjs';

import CoinList from './components/coinList';
>>>>>>> 89fba3ef03a336d0ff6eb30b8a810dadbd8a4954


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
<<<<<<< HEAD
        <Details coin={this.coin} />
        {/* change to this.state.coin */}
=======
        <Container style={{ padding: '2em 0em' }}>
          <Menu borderless secondary>
            <Menu.Item>
              <Header>Cryptocurrency Prices</Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                color="facebook"
                as="a"
                href="https://github.com/syin1/React-Table"
              >
                <Icon name="github" />
                Project Source
              </Button>
            </Menu.Item>
          </Menu>

          <CoinList />
        </Container>
>>>>>>> 89fba3ef03a336d0ff6eb30b8a810dadbd8a4954
      </div>
    );
  }
}

export default App;
