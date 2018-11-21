import React from 'react';
import { shallow } from 'enzyme';
import { CoinRow } from './coinRow';

describe('CoinRow', () => {
  it('should render correctly', () => {
    const coins = [
      {
        id: 1,
        name: 'BTC',
        price: '$ 5,610.06',
        change: '0.12%',
        marketcap: '$ 97.52 B',
        dvolume: '$ 184,804,483.4',
        tvolume: '$ 1,213.74 M',
        favorite: false
      },
      {
        id: 2,
        name: 'ETH',
        price: '$ 176.76',
        change: '1.33%',
        marketcap: '$ 18.26 B',
        dvolume: '$ 48,189,314.6',
        tvolume: '$ 633.48 M',
        favorite: false
      },
      {
        id: 3,
        name: 'XRP',
        price: '$ 0.5193',
        change: '5.44%',
        marketcap: '$ 51.93 B',
        dvolume: '$ 48,561,892.7',
        tvolume: '$ 649.65 M',
        favorite: false
      }
    ];

    shallow(<CoinRow coin={coins[0]} addFavorite={() => {}} />);
  });
});
