import axios from 'axios';
import moment from 'moment';

export default {

  //frequency minute, hour, day
  //coin BTC,ETH
  //currency USD, CAD
  //limit minute: 20 to get 1 hour, hour: 8 to get 1 day, day: 10 to get 30 days

  getHistoryData: function (frequency, coin, currency, limit, format) {
    return axios.get(
      'https://min-api.cryptocompare.com/data/histo' + frequency + '?fsym=' + coin + '&tsym=' + currency + '&limit=' + limit + '&aggregate=3&e=CCCAGG'
    ).then(rawData => {
      let dataPoints = [];

      rawData.data.Data.forEach(histData => {
        dataPoints.push({
          priceDate: moment.unix(histData.time).format(format), price: histData.close
        });
      });

      return dataPoints;
    });


  },
  get30DayData: function (coin) {

    return this.getHistoryData('day', coin, 'CAD', 10, 'MMM DD');

  },

  get1DayData: function (coin) {

    return this.getHistoryData('hour', coin, 'CAD', 8, 'hh:mm a');

  },

  get1HourData: function (coin) {

    return this.getHistoryData('minute', coin, 'CAD', 20, 'hh:mm a');

  }
};