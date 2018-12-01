import React, { Component } from 'react';
import DetailsGraph from './DetailsGraph';
import './Details.css';
import api from './api';


class Details extends Component {

  coin = this.props.coin;

  get30DayHistoryData(coin) {
    api.get30DayData(coin).then(histData => {
      this.setState({ data: histData, title: '30 Day Price Chart' });
    })

  }

  get1HourHistoryData(coin) {
    api.get1HourData(coin).then(histData => {
      this.setState({ data: histData, title: 'Current Hour Price Chart' });
    })
  }

  get1DayHistoryData(coin) {
    api.get1DayData(coin).then(histData => {
      this.setState({ data: histData, title: 'Current Day Price Chart' });
    })
  }

  handleGraphChange(freq) {
    if (freq === '1d') {
      this.get1DayHistoryData(this.coin);
    } else if (freq === '1h') {
      this.get1HourHistoryData(this.coin);
    } else { this.get30DayHistoryData(this.coin) }
  }

  componentDidMount() {
    this.get30DayHistoryData(this.coin);
  }

  state = {
    data: [],
    title: ''
  };

  render() {
    return (
      <div className="Details">
        <div className='Title'><h1>{this.coin} {this.state.title}</h1></div>
        <button type='button' onClick={() => this.handleGraphChange('1h')}>1h</button><button type='button' onClick={() => this.handleGraphChange('1d')}>1d</button><button type='button' onClick={() => this.handleGraphChange('1m')}>1m</button>
        <DetailsGraph data={this.state.data} />
        <div className='footer'></div>
      </div>
    );
  }
}

export default Details;