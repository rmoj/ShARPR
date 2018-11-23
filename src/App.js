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
      </div>
    );
  }
}

export default App;
