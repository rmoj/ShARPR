import React, { Component } from 'react';
import SignInForm from './SignInUiPage/SignInForm';
import SignUpForm from './SignInUiPage/SignUpForm';
import './App.css';
import './SignInUiPage/AppSignUi.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src="./SHARPR.png" alt="SHARPR LOGO" />
        </div>

        <Router>
          <div className="AppUi">
            <div className="App__Aside" />
            <div className="App__Form">
              <div className="PageSwitcher">
                <NavLink
                  to="/sign-in"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign In
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  activeClassName="PageSwitcher__Item--Active"
                  className="PageSwitcher__Item"
                >
                  Sign Up
                </NavLink>
              </div>

              <div className="FormTitle">
                <NavLink
                  to="/sign-in"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign In
                </NavLink>{' '}
                or{' '}
                <NavLink
                  exact
                  to="/"
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Sign Up
                </NavLink>
              </div>

              <Route exact path="/" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
            </div>
          </div>
        </Router>

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
