import axios from 'axios';

export default {

  //frequency minute, hour, day
  getHistory: function (frequency, coin, currency, limit) {
    return axios.get(
      'https://min-api.cryptocompare.com/data/histo' + frequency + '?fsym=' + coin + '&tsym=' + currency + '&limit=' + limit + '&aggregate=3&e=CCCAGG'
    );
  },
  getBTCHistoMinute: function () {
    return axios.get(
      'https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG'
    );
  },
  getBTCHistoHour: function () {
    return axios.get(
      'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24&aggregate=3&e=CCCAGG'
    );
  },
  getBTCHistoDay: function () {
    return axios.get(
      'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3&e=CCCAGG'
    );
  }
};