import React, { Component } from 'react';
import SignIn from './SignInUiPage/SignIn';
import SignUp from './SignInUiPage/SignUp';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import './components/Navbar.css'
import './App.css';
import './SignInUiPage/AppSignUi.css';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

import Tickersfew from './components/Tickersfew';
import CurrencyGroupPair from './components/currencyConverter';
import CoinContainer from './components/coinContainer';

class App extends Component {

  //state = { coin: '' }
  coin = 'BTC';

  render() {
    return (
      <div>
        <Navbar />
       <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/home" component={Tickersfew} />
          <Route exact path="/converter" component={CurrencyGroupPair} />
          <Route exact path="/prices" component={CoinContainer} />
          <Route component={SignUp} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
