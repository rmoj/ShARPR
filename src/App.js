import React, { Component } from "react";
import "./App.css";
import Tickersfew from "./components/Tickersfew";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="./SHARPR.png" alt="SHARPR LOGO" />
        </div>
        <Tickersfew />
      </div>
    );
  }
}

export default App;
